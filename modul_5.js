// Задача 1

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

console.log(parent.isPrototypeOf(child));

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;


// Задача 2

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки


// Задача 3

function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const car = new Car('Audi', 'Q3', 36000);


// Задача 4

function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });


// Задача 5
// Задача 6
// Задача 7
// Задача 8
// Задача 9
// Задача 10
// Задача 11
// Задача 12
// Задача 13
// Задача 14
// Задача 15
// Задача 16
// Задача 17
// Задача 18
// Задача 19