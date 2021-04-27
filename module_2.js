// Задача 1

function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}


// Задача 2

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
  
    return 'Доступ запрещен, неверный пароль!';
  
  // Пиши код выше этой строки
}


// Задача 3

function checkStorage(available, ordered) {
  // Пиши код ниже этой строки


  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  } 
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 
    return 'Заказ оформлен, с вами свяжется менеджер';


  // Пиши код выше этой строки
}

// Задача 4

// Пиши код ниже этой строки
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


// Задача 5

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = 'яблоко';
const secondElement = 'слива';
const lastElement = 'апельсин';



// Задача 6

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
fruits[1] = 'персик';
fruits[3] = 'банан';


// Задача 7

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const  fruitsArrayLength = fruits.length;
console.log(fruits.length);


// Задача 8

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length - 1;
fruits[lastElementIndex];
const lastElement = fruits[lastElementIndex];


// Задача 9

function getExtremeElements(array) {
    // Пиши код ниже этой строки
    return [(array[0]), array[array.length - 1]];


    // Пиши код выше этой строки
}
  

// Задача 10

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  words = message.split(delimeter);
  
  // Пиши код выше этой строки
  return words;
}

const message = 'Манго спешит на поезд';
console.log(message.split(' '));


// Задача 11

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
let words;
  
words = (message.split(' ').length) * pricePerWord;
  
return words;
  // Пиши код выше этой строки
}

console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));


// Задача 12

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
  
 string = array.join(delimeter);
  
  // Пиши код выше этой строки
  return string;
}
const string = ['Манго', 'спешит', 'на', 'поезд'];
console.log(string.join(''));


// Задача 13

function slugify(title) {
  // Пиши код ниже этой строки
  let slug = title.toLowerCase().split(' ').join('-');
 
 return slug;
  // Пиши код выше этой строки
}


// Задача 14

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);


// Задача 15

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку

console.log(allClients);


// Задача 16

function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
const makeArray = firstArray.concat(secondArray).slice(0, maxLength);
  
return makeArray;
  
    // Пиши код выше этой строки
  }


console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));


// Задача 17

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}


// Задача 18

function calculateTotal(number) {
  // Пиши код ниже этой строки
let total = 0;
    
for (let i=0; i<=number; i+=1) {
    total+=i;
  }
  return total;
  // Пиши код выше этой строки
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());


// Задача 19

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

let i = 0;

for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}


// Задача 20

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
for (let i=0; i<order.length; i+=1) {
  total+=order[i];
  }
  // Пиши код выше этой строки
  return total;
}

// пояснение к 20 задаче
// Запись i += 1 это сокращенная форма от i = i + 1
// Т.е. взять предыдущее значение переменной, прибавить к нему 1 и сохранить под тем же именем.
// Давайте на примере calculateTotalPrice([10, 20, 30])
// Начало функции:
// order – получает [10, 20, 30] (то, что передали в функцию)
// total устанавливается в 0
// При входе в цикл:
// устанавливается i = 0
// 1) Шаг первый:
// проверяется i < order.length ( 0 < 3 , order.length – количество элементов массива)
// поскольку условие истинное – заходим в цикл
// total += order[i] ( total = 0 (старое значение total) + 10 (значение order[0] ) => 10 )
// Обновляется значение i ( i += 1 => 1 ).
// В конце этого шага:
// order = [10, 20, 30]
// total = 10
// i = 1
// 2) Шаг второй:
// проверяется i < order.length ( 1 < 3 )
// поскольку условие истинное – снова заходим в цикл
// total += order[i] ( total = 10 (старое значение total) + 20 (значение order[1] ) => `30`)
// Обновляется значение i ( i += 1 ).
// В конце этого шага:
// order = [10, 20, 30]
// total = 30
// i = 2
// 3) Шаг третий:
// проверяется i < order.length ( 2 < 3 )
// поскольку условие истинное – заходим в цикл
// total += order[i] ( total = 30 (старое значение total) + 30 (значение order[2] ) => `60`)
// Обновляется значение i ( i += 1 ).
// В конце этого шага:
// order = [10, 20, 30]
// total = 60
// i = 3
// 4) Шаг четвертый:
// проверяется i < order.length ( 3 < 3 )
// поскольку условие ложное – пропускаем цикл и двигаемся дальше
// return total;
// Работа функции прекращается, возвращая значение переменной total (которое на данный момент равно 60 )



// Задача 21

function findLongestWord(string) {
  // Пиши код ниже этой строки 

const stringSplit = string.split(' ');
let longestWord = '';

  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
    longestWord = word;
  }
 }
  return longestWord;
  // Пиши код выше этой строки
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

// Задача 21  -  пояснение
//function findLongestWord(string) {
//   // Пиши код ниже этой строки
// // зададим переменную
// let longestwords= '';
// // разделим слова в предложении и сделаем массив
//   stringWords = string.split(' ');
//   // переберем слова в массиве по 
//   for (let i = 0; i < stringWords.length; i += 1) {
//     words = stringWords[i];
//     // поставим условие если 
//     if (words.length > longestwords.length) {
//     longestwords=words;
//     }
//   }
//   return  longestwords;
// }
// for здесь делает то же самое, что и всегда -

// 1) Перед началом работы исполняет первую часть:
// let i=0; - инициализирует переменную i значением 0

// 2) Перед каждым заходом проверяет условие во второй части
// i<stringWords.length - если текущее значение переменной i меньше количества элементов в массиве stringWords (в нашем случае - это будет количество слов),
// - то переходит к исполнению тела цикла (на шаг 3 )
// - если условие получается ложным, переходит к шагу 6

// 3) На каждой итерации значение i у нас будет меняться, соответственно каждый раз мы будем работать со следующим словом из массива stringWords
// words = stringWords[i];
// if (words.length > longestwords.length) {
//   longestwords = words;
// }

// 4) После завершения исполнения тела цикла исполняется команда из третьей части
// i+=1 - увеличить предыдущее значение i на 1 (т.е. на каждом следующем шаге у нас i будет увеличиваться (0, 1, 2....)

// 5) Вернуться к шагу 2

// 6) Начать исполнение кода за пределами цикла
// return longestwords; - выдать в результате исполнения функции текущее значение переменной longestwords


// Задача 22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки

 for (i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Пиши код выше этой строки
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
console.log(createArrayOfNumbers());


// Задача 23

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
let biggerNumber=[];
  for(const number of numbers) {
    if (number>value) {
      biggerNumber.push(number);
    }
  }
  return biggerNumber;

  // Пиши код выше этой строки
}


// Задача 24

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit);// Дополни эту строку
}


// Задача 25

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let commonArray = [];
  for (let i = 0; i < array1.length; i++) {
  	if (array2.includes(array1[i])) {
    	commonArray.push(array1[i]);
    }
  }
  return commonArray;
  // Пиши код выше этой строки
}

// В этой задаче цикл for должен иметь столько итераций, сколько элементов в массиве array1. 
// С помощью выражения i < array1.length мы говорим: пока значение i будет меньше длины массива array1,
// цикл должен выполнятся.Когда і достигнет значения длины массива array1, это будет означать, что все элементы массива перебраны и из цикла можно выходить.


// Задача 26

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const number of order ) {
    
    total += number;
  }

  // Пиши код выше этой строки
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));  
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  
console.log(calculateTotalPrice([])); 


// Задача 27

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const number of numbers) {
    
   if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}


// Задача 28

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;


// Задача 29

function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
let evenNumbers = [];
  for (let i = start; i <= end; i += 1){
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
    // Пиши код выше этой строки
  }

// Задача 30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}


// Задача 31

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

 
  // Пиши код выше этой строки
}


// Задача 32

function includes(array, value) {
  // Пиши код ниже этой строки
for (let item of array) {
  if(item === value) {
    return true;
  }
} 
  return false;  
  // Пиши код выше этой строки
}
