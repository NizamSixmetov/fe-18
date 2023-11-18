dataUrl = 'https://jsonplaceholder.typicode.com/users';
axios(dataUrl).then(({ data }) => {
    data.forEach(user => {
        document.querySelector('.container-main').innerHTML += `
        <h2>Id: ${user.id}</h2>
        <h2> Name: ${user.name}</h2>
        <h2>Username :${user.username}</h2>
        <h2>Email: ${user.email}</h2>
        <hr>
        `
    });
})