const form = document.getElementById('form')
console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(form.elements)

    const firstName = document.getElementById('firstname')
    const lastName = document.getElementById('lastname')
    const country = document.getElementById('country')
    const week = document.getElementById('week')
    const pull = document.getElementById('pull')
    const deploy = document.getElementById('deploy')
    const security = document.getElementById('security')
    const range = document.getElementById('myslider')


    if(firstName.value !== ""  || lastName.value !== "" || country.value !==
    ''){
        confirm('Are you sure you want to submit?')
    }

    console.log(week.checked, pull.checked, deploy.checked, security.checked, range.value)
    console.log('First Name:', firstName.value)
    console.log('Last Name:', lastName.value)
    console.log('Country:', country.value)
    console.log('Weekly report:', week.checked)
    console.log('Pull Requests:', pull.checked)
    console.log('Deployment:', deploy.checked)
    console.log('Run security check upon login:', security.checked)

})
    