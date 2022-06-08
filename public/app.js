const FORM = document.querySelector('form')
const DATE = document.querySelector('#date')
const OP = document.querySelector('#operation')
const SHIFT = document.querySelector('#shift')

const SUBMIT = document.querySelector('#submit')
const CLEAR = document.querySelector('#clear')
const ANSWER = document.querySelector('#answer')

FORM.addEventListener('submit', async(e) => {
    e.preventDefault()
    
    fetch(`/operation?op=${OP.value}&date=${DATE.value}&shift=${SHIFT.value}`).then(res => {
        res.json().then(data => {
            console.log(data)
            ANSWER.innerText = data.date
        })
    })
})

CLEAR.addEventListener('click', (e) => {
    e.preventDefault()

    DATE.value = ""
    OP.value = ""
    SHIFT.value = ""
    ANSWER.innerText = ""
})

