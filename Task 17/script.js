const url = 'https://jsonplaceholder.typicode.com/users'
async function getData() {
    const { data } = await axios.get(url)
    return data
}

async function writeData() {
    const users = await getData()
    users.forEach(({ name }) => {
        document.write(name + "<br/>")
    });
}
writeData()