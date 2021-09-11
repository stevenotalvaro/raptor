const formElem = document.querySelector("#myForm");
const txt = document.querySelector("#file");

formElem.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append("jobname", "jsprueba");
  formData.append("email", "fabiosteven1998.12@gmail.com");
  formData.append("fileSeq", txt.files[0]);
  formData.append("No3DModels", "OK");

  try {
    const resp = await fetch("http://raptorx.uchicago.edu/ContactMap/", {
      method: "POST",
      body: formData,
      credentials: "include",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      console.log(cloudResp);
    } else {
      console.log("error");
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
});
