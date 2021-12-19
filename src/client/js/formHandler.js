function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    fetch(`http://localhost:8080/test?text=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        const text = 
        `
         Model: ${res.model}<br>
         Score Tag: ${res.score_tag}<br>
         Agreement: ${res.agreement}<br>
         Subjectivity: ${res.subjectivity}<br>
         Confidence: ${res.confidence}<br>
         Irony: ${res.irony}`
        document.getElementById('results').innerHTML = text
    })
}

export { handleSubmit }
