function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8080/test?text=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        const text = 
        `Aggreement: ${res.agreement} <br>
         Subjectivity: ${res.subjectivity} <br>
         Confidence: ${res.confidence}`
        document.getElementById('results').innerHTML = text
    })
}

export { handleSubmit }
