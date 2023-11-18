// const imagesData = [
//     {
//         id: 1,
//         title: "Explore The World",
//         image: "./images/image1.jpg",
//     },
//     {
//         id: 2,
//         title: "Wild Forest",
//         image: "./images/image2.jpg",
//     },
//     {
//         id: 3,
//         title: "Sunny Beach",
//         image: "./images/image3.jpg",
//     },
//     {
//         id: 4,
//         title: "City on Winter",
//         image: "./images/image4.jpg",
//     },
//     {
//         id: 5,
//         title: "Mountains - Clouds",
//         image: "./images/image5.jpg",
//     },
// ];
// console.log(imagesData);


// const image_container = document.querySelector('.images-container');

// imagesData.forEach(({image , title}) => {
//     image_container.innerHTML+= `
//     <div class="image-card">
//     <img src="${image}" alt="">
//     <h4>${title}</h4>
//     </div>
// `
// })

// const sliders = [
//     {
//         id: 1,
//         title: "Xosrov Maştağalı",
//         text: "Mənə əntiqə qəlib hal dəyanın bərk dəyanın",
//         image: "./img/Xosrov.jpg",
//     },
//     {
//         id: 2,
//         title: "Balaəli Maştağalı",
//         text:"Mən axtaran səndədi, sən axtaran məndədi",
//         image: "./img/Balaeli.jpg",
//     },
//     {
//         id: 3,
//         title: "Cahangeşt Balaxanılı",
//         text:"Rəşad dağlının yadigarı, qan eliyir",
//         image: "./img/Cahangest.jpg",
//     },
//     {
//         id: 4,
//         title: "Rəşad Dağlı",
//         text:"Bidənə belə, bidənə elə, eliyə bilərsən belə?",
//         image: "./img/resad.jpg",
//     },
//     {
//         id: 5,
//         title: "Vuqar Biləcəri",
//         text:"Görəsən bağban ücün bağdan əziz nə olar bilər",
//         image: "./img/Vuqar.jpg",
//     },
// ];

// const slidersContainer = document.querySelector(".sliders");

// sliders.forEach(({ image, title, text }) => {
//     slidersContainer.innerHTML += `
//     <div class="slider-card">
//     <img src=${image} class="image-width"/>
//     <p>${text}</p>
//     <h4 class="card-title">${title}</h4>
//         </div>
//     `;
// });

// const sliderCards = document.querySelectorAll(".slider-card");

// sliderCards.forEach((sliderCard) => {
//     sliderCards[0].classList.add("active");
//     sliderCard.addEventListener("click", (e) => {
//         e.preventDefault();
//         sliderCards.forEach((sliderCard) => {
//             sliderCard.classList.remove("active");
//         });
//         sliderCard.classList.add("active");
//     });
// });