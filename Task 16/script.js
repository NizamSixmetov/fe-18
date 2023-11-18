// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(users => users.forEach(users =>{
//     document.querySelector('.container')
// }))

const inputElem = document.getElementById('input-value')
const button = document.querySelector('.search-button')

button.addEventListener('click',()=>{
    fetch(`https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${inputElem.value}`)
    .then(res => res.json())
    .then(hits => {
    console.log(hits);
        hits.hits.forEach(element => {
            document.querySelector(".images-wrapper").innerHTML += `
        <div class="image-box">
            <img
                src="${element.largeImageURL}"
                alt=""
            />
    
            <div class="text-box">
                <p>
                <span>User: ${element.id}</span>
                <span>User</span>
                </p>
    
                <a
                href="${element.pageURL}"
                >Go to page</a
                >
            </div>
            </div>
        `
        })
    }).catch((error) => console.log(error))
    inputElem.value = ''
})

inputElem.addEventListener('click',()=>{
    document.querySelector('.images-wrapper').innerHTML =``
})

// fetch(`https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${inputElem.value}`)
//     .then(res => res.json())
//     .then(hits => {
//     console.log(hits);
//         hits.hits.forEach(element => {
//             document.querySelector(".images-wrapper").innerHTML += `
//         <div class="image-box">
//             <img
//                 src="${element.largeImageURL}"
//                 alt=""
//             />
    
//             <div class="text-box">
//                 <p>
//                 <span>User :</span>
    
//                 <span>username</span>
//                 </p>
    
//                 <a
//                 href="https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/"
//                 >Go to page</a
//                 >
//             </div>
//             </div>
//         `
//         })
//     })