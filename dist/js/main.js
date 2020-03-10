const getText = async () => {
    const res = await fetch('/test')
    const msg = await res.text()

    document.getElementById('word-element').innerText = msg 
}

const getUsers = async() => {
    const res = await fetch('/api/users')
    const users = await res.json()

    users.forEach( user => {
        const li = document.createElement('li')
        const text = document.createTextNode(user.name)
        li.appendChild(text)
        document.getElementById('users').appendChild(li)
    })
}

getText()
getUsers()