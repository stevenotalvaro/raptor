const formElem = document.querySelector('#myForm')
const txt = document.querySelector('#file')

formElem.addEventListener('submit', async e => {
    e.preventDefault()
    const url = 'http://raptorx.uchicago.edu/ContactMap/'
    const formData = new FormData()

    formData.append('jobname', 'finish2')
    formData.append('email', 'fabiosteven1998.12@gmail.com')
    formData.append('fileSeq', txt.files[0])
    formData.append('No3DModels', 'OK')
    try {
        const resp = await fetch(url, {
            mode: 'no-cors',
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        console.log(resp)
        if (resp.ok) {
            const cloudResp = await resp.text()
            console.log(cloudResp)
        } else {
            console.log('error')
            throw await resp.text()
        }
    } catch (error) {
        console.log(error)
    }
})
