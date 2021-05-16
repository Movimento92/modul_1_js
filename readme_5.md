<!-- теория 1 -->

Прототип объекта и метод Object.create()
Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как **proto**.

const animal = {
legs: 4
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // { name: 'Манго', **proto**: animal }
console.log(animal.isPrototypeOf(dog)); // true
Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка в **proto**, называется прототипом. В нашем примере объект animal это прототип для объекта dog. Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4
Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog. При обращении к dog.legs интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.**proto**, то есть, в данном случае, в объекте animal - его прототипе.

То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.

Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит, то обращается к свойству **proto**, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа. Если интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.

Задание
Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

Тесты
Объявлена переменная parent.
Значение переменной parent это объект.
Вызов parent.hasOwnProperty('surname') возвращает true.
Вызов parent.hasOwnProperty('heritage') возвращает true.
Объявлена переменная child.
Значение переменной child это объект.
Вызов child.hasOwnProperty('name') возвращает true.
Обращение к child.name возвращает 'Jason'.
Вызов child.hasOwnProperty('age') возвращает true.
Обращение к child.age возвращает 27.
Вызов child.hasOwnProperty('surname') возвращает false.
Обращение к child.surname возвращает 'Moore'.
Вызов child.hasOwnProperty('heritage') возвращает false.
Обращение к child.heritage возвращает 'Irish'.
Вызов parent.isPrototypeOf(child) возвращает true.
Используется метод Object.create().

<!-- теория 2 -->

Задача. Цепочка прототипов
Задание
Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

Тесты
Объявлена переменная ancestor.
Значение переменной ancestor это объект.
Объявлена переменная parent.
Значение переменной parent это объект.
Объявлена переменная child.
Значение переменной child это объект.
Вызов parent.isPrototypeOf(child) возвращает true.
Обращение к parent.surname возвращает 'Moore'.
Обращение к parent.heritage возвращает 'Irish'.
Вызов parent.hasOwnProperty('surname') возвращает true.
Вызов parent.hasOwnProperty('heritage') возвращает false.
Вызов ancestor.isPrototypeOf(parent) возвращает true.
Вызов child.hasOwnProperty('surname') возвращает false.
Обращение к child.surname возвращает 'Moore'.
Обращение к child.heritage возвращает 'Irish'.
Вызов child.hasOwnProperty('heritage') возвращает false.
Обращение к ancestor.heritage возвращает 'Irish'.
Вызов ancestor.hasOwnProperty('surname') возвращает true.
Вызов ancestor.hasOwnProperty('heritage') возвращает true.
Обращение к ancestor.surname возвращает 'Dawson'.
Используется метод Object.create().

<!-- теория 3 -->

Функция-конструктор
Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями, и методами для взаимодействия со свойствами. Всё это нужно сделать динамически, во время выполнения программы. Для этого используют функции-конструкторы, вызывая их при помощи специального оператора new.

function User() {
// Тело функции
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
Любая функция, кроме стрелочной, может быть использована как конструктор. Чтобы отличить конструктор от обычной функции, их принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

Вызов функции с оператором new приводит к созданию нового объекта и вызову функции в контексте этого объекта. То есть this внутри функции будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

function User(name, email, age) {
this.name = name;
this.email = email;
}

const mango = new User('Манго', 'mango@mail.com');
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User('Поли', 'poly@mail.com');
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
Задание
Объяви функцию-конструктор Car которая принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

Тесты
Объявлена функция Car(brand, model, price).
В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

<!-- теория 4 -->

Объект настроек
Функции-конструкторы всегда принимают большое количество входных данных для свойств будущего объекта. Поэтому, к ним также можно применить паттерн «Объект настроек», передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

function User({ name, email }) {
this.name = name;
this.email = email;
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
const poly = new User({ name: 'Поли', email: 'poly@mail.com' });
Задание
Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.

Тесты
Объявлена функция Car({ brand, model, price }).
В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

<!-- теория 5 -->

Свойство prototype
Мы уже знаем что такое прототип объекта, свойство **proto** и как происходит поиск отсутствующих свойств объекта по цепочке прототипов. Во время вызова функции-конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.

У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, указывающим на саму функцию-конструктор.

function User() {}
console.log(User.prototype); // { constructor: User }
При вызове функции-конструктора и создании объекта через new, объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.

const mango = new User();
console.log(User.prototype.isPrototypeOf(mango)); // true
В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором. Методы в prototype будут вызываться объектами созданными функцией-конструктором, поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

function User({ name, email }) {
this.name = name;
this.email = email;
}

User.prototype.getEmail = function () {
return this.email;
};

User.prototype.changeEmail = function (newEmail) {
this.email = newEmail;
};

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

console.log(mango.getEmail()); // mango@mail.com
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
Задание
Добавь в свойство prototype функции-конструктора Car два метода:

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
Тесты
Объявлена функция Car({ brand, model, price }).
Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
Значение Car.prototype.getPrice это функция.
Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
Значение Car.prototype.changePrice это функция.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.

<!-- теория 6 -->
<!-- теория 7 -->
<!-- теория 8 -->
<!-- теория 9 -->
<!-- теория 10 -->
<!-- теория 11 -->
<!-- теория 12 -->
<!-- теория 13 -->

<!-- теория 14 -->
<!-- теория 15 -->
<!-- теория 16 -->
<!-- теория 17 -->
<!-- теория 18 -->
<!-- теория 19 -->
