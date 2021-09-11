// let file = document.getElementById("file");
let archivo;
let archivo2;
// file.addEventListener("change", function () {
//   for (let i = 0; i < file.files.length; i++) {
//     archivo = file.files[i];
//   }
// });

const pdb = document.querySelector("#file");
const mol = document.querySelector("#file2");
pdb.addEventListener("change", (e) => {
  archivo = e.target.files[0];
});

mol.addEventListener("change", (e) => {
  archivo2 = e.target.files[0];
});

setTimeout(() => {
  console.log(archivo, archivo2);
}, 10000);

const fileUpload = async (archivo, archivo2) => {
  const formData = new FormData();

  formData.append("data[Docking][target_upload]", archivo);
  formData.append("data[Docking][ligand_upload]", archivo2);
  formData.append("data[Docking][job_name]", "js");
  formData.append("data[Docking][email]", "fabiosteven1998.12@gmail.com");
  formData.append("data[Docking][docking_type]", "Accurate");
  formData.append("data[Docking][xcen]", "5");
  formData.append("data[Docking][ycen]", "5");
  formData.append("data[Docking][zcen]", "5");
  formData.append("data[Docking][xsize]", "5");
  formData.append("data[Docking][ysize]", "5");
  formData.append("data[Docking][zsize]", "5");
  formData.append("data[Docking][passiveFlexibilityDistance]", "5");
  formData.append("formSubmit", "OK");
  formData.append("-", "-o");
  formData.append("prueba.htm", "prueba.html");

  try {
    const resp = await fetch("http://raptorx.uchicago.edu/ContactMap/", {
      method: "POST",
      formData,
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
};
