// const number = prompt("Reqem daxil edin")

// const numNum = (number) => {
//     if (number > 0){
//         console.log("Menfi deil");
//     }else{
//         console.log('Menfidi');
//     }
// }
// numNum(number);


// const number = prompt('Reqem daxil edin', 0);
// const Num1 = (number)=>{
//     number >= 0 ? console.log('Menfi deil') : console.log('Menfidi');
// }
// Num1(number);


// -------------------------------------------------------

// const text = prompt('Cumle yazin');

// const strLength = (text) => {
//     const h1Elem = document.getElementById('h1');
//     h1Elem.innerHTML =`
//     <h1>Bu "${text}" textin simvol sayi: ${text.length}</h1>
// `
// }
// strLength(text);


// const alertText = prompt('Sozu dexil edin', 'sozu daxil edin')
// const Element1 = (alertText)=>{
//     const h1Elem = document.getElementById('h1');
//     h1Elem.innerHTML = `<h1>${alertText.toString().slice(-1)}</h1>`
// }
// Element1(alertText);


// const alertUser = prompt('vvedite cislo');
// const userDm = (alertUser) => {
//     alertUser % 2 == 0
//         ? document.getElementById('h1').innerHTML = `<h1>${alertUser} 2ye bolunur</h1>`
//         : document.getElementById('h1').innerHTML = `<h1>${alertUser} 2ye bolunmur</h1>`
// }
// userDm(alertUser);

// const userWord1 = prompt('sozu daxil edin', 'Nizam');
// const userWord2 = prompt('sozu daxil edin', 'Nizam');

// const userFirstWord1 =userWord1[0]
// const userFirstWord2 = userWord2[0]
// const sravneniye = () =>{
//     userFirstWord1 === userFirstWord2
//     ?document.getElementById('h1').innerHTML = `<h1>${userWord1} ve ${userWord2} sozlerinin bas herifleri eynidi</h1>`
//     :document.getElementById('h1').innerHTML = `<h1>${userWord1} ve ${userWord2} sozlerinin bas herifleri eyni deil</h1>`
// }
// sravneniye();


// const userWord = prompt('soz daxil edin', 'soz deyirem size q');
// const userWord111 = userWord[userWord.length -1]
// console.log(userWord111);

// const alfavitYoxla = (userWord111) => {
//     userWord111 == ['q'] ? console.log('var') : console.log('yoxdu');
// }
// alfavitYoxla(userWord);
















// -      0 1 2 3   0 1 2 3   2     –        +0    2
// 2      0 1 _ 3   0 1 2     2     yes       +1    3
// 3      0 1 2 _   0 1 2     1     not      +0    1
// 1      0 _ 2 3   0 1 2     2     yes       +1    3

// function shuffle(array) {
//     for (
//         let j, x, i = array.length;
//         i;
//         j = parseInt(Math.random() * i),
//         x = array[--i],
//         array[i] = array[j],
//         array[j] = x
//     );
// }

// function getRandom(min, max) {
//     let arr = Array.from(Array(max - min + 1).keys(), x => x + min);
//     shuffle(arr);
//     return arr;
// }
// let a = getRandom(3, 15);
// console.log(getRandom(1, 100).toString());

// const arr = [];
// function randomDefault() {
//     for (let i = 0; i < 11; i++){ 
//         console.log(i);
//     }
// }
// randomDefault()



// const arr = [1];

// function randomDefault (){
//     if(Math.random().toFixed(2) !== arr){
//         arr.push(Math.random().toFixed(2))
//         document.getElementById('your').innerHTML +=`
//         <p>${Math.random().toFixed(2)}</p>
//         `
//     }else{
//         console.log("tekrar");
//     }
//     console.log(arr);
// }
// randomDefault();



// const generateArrayRandomNumber =(min, max) =>{
//     let totalNumbers = max - min + 1,
//         arrayTotalNumbers = [],
//         arrayRandomNumbers = [],
//         tempRandomNumber;
//         const arr =[]
//     while (totalNumbers--) {
//         arrayTotalNumbers.push(totalNumbers + min);
//     }
//     while (arrayTotalNumbers.length) {
//         tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
//         arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
//         arrayTotalNumbers.splice(tempRandomNumber, 1);

//         document.getElementById('your').innerHTML=`
//         <p id="textP">${arrayRandomNumbers}</p>
//         `
//         let valueParagraph = document.getElementById('textP').textContent;
//         console.log(valueParagraph);
//         arr.push(valueParagraph);
//         console.log(arr);
//     }
//     return arrayRandomNumbers;
// }
//  Нужно учесть что в диапазоне участвуют и минимальное и максимальное число
//  тоесть если задать (0, 100) то на выходе получим массив из 101-го числа
//  от 1 до 100 и плюс число 0
// console.log((generateArrayRandomNumber(1, 10)));


const numbers = [];
const minimum = 1;
const maximum = 10;
// numbers arrayni minimumdan maximuma qeder doldurduq
for (let i = minimum; i <= maximum; i++) {
    numbers.push(i);
}
// funksiya array massivinden bir random reqem qoturur ve onu massivden silir
function getRandomUniqueNumber() {
    if (numbers.length === 0) {
        // number arr- de reqem sati bitende asqidaki yazini qaytarir
        return document.getElementById('your2').innerHTML = `
        <p>Maximum reqem bitdi</p>
        `
    }
    // asaqidaki const math.random istifade ederek random reqem tapir(0-dan 1-kimi),
    // ve o random reqemi numbers massivin uzunluquna vurur.
    // Math.floor ilede onu "yumrulayir".
    const randomIndex = Math.floor(Math.random() * numbers.length);
    // asaqidaki const ise splice metodu ile randomindex le tapilmis random reqemi silir,
    const randomNumber = numbers.splice(randomIndex, 1);
    // innerHeight.html ile alinmis random reqem ekranda qosterilir +consolda
    document.getElementById('your').innerHTML += `
        <p>${console.log(randomNumber), randomNumber}</p>
        `;
        // ve netice olaraq funksiya randomNumber - qaytarir
    return randomNumber;
}
console.log(getRandomUniqueNumber());