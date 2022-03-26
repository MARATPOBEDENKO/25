let phrases = [
  { text: 'скинуть учителю свой рисунок', image: 'https://cdn-icons-png.flaticon.com/512/2722/2722190.png' },
  {text: 'поесть пельменей', image: 'https://cdn-icons-png.flaticon.com/512/651/651571.png' },
  {text: 'поспать', image: 'https://cdn-icons.flaticon.com/png/512/3009/premium/3009931.png?token=exp=1648311985~hmac=4ea88185f6d9b8967f51c69f90152857' },
  { text: 'сходить в туалет', image: 'https://cdn-icons-png.flaticon.com/512/456/456365.png' },
  { text: 'попить газировки', image: 'https://cdn-icons.flaticon.com/png/512/1349/premium/1349787.png?token=exp=1648311931~hmac=b678d20cd34338448fcc303e0fc1b3a9' },
  { text: 'поесть шоколад', image: 'https://cdn-icons-png.flaticon.com/512/3465/3465218.png' },
  { text: 'купить билеты в дубаи', image: 'https://cdn-icons.flaticon.com/png/512/3088/premium/3088137.png?token=exp=1648311864~hmac=897215b5a3eef4d3580fceb82e4b9c5b' },
  { text: 'посмотреть телевизор', image: 'https://cdn-icons-png.flaticon.com/512/3159/3159461.png' },
  {text: 'поиграть в телефон', image: 'https://cdn-icons-png.flaticon.com/512/3210/3210096.png' },
  { text: 'выгулять собаку', image: 'https://cdn-icons.flaticon.com/png/512/4540/premium/4540795.png?token=exp=1648311689~hmac=16f6f212c988714610afbbf495c745ef' }
]
function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 


