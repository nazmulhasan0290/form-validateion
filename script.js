const name = document.getElementById('name')
const password = document.getElementById('password')
const error = document.getElementById('error')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let msg = []
    if (name.value === '' || name.value == null) {
        msg.push('Name is highly required..')
        e.preventDefault()
    }
    if (password.value.length < 6) {
        msg.push('Password must be at least 6 character')
    }
    if (password.value = 'password') {
        msg.push('Your password should not be "password"  ')
    }
    error.innerText = msg.join(', ')
})