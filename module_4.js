//задача 1

function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza();
const pointer = makePizza;
console.log(makePizza());


//задача 2

function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback (pizzaName, deliverPizza, makePizza);
}


//задача 3

function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки
makePizza('Ультрасыр', function eatPizza(pizzaName) {
  console.log(`Едим пиццу ${pizzaName}.`);
});



//задача 4

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
  	if(this.pizzas.includes(pizzaName)){
    	return onSuccess(pizzaName);
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки
// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}
// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}
// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);


//задача 5

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }
    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};



//задача 6

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


//задача 7

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+=1}-й в очереди.`};

const messages = [];
for (let key = 0; key < Object.keys(orders).length; key++) {
 messages.push (composeMessage.call(orders[key], key));
};

// Внутри любой функции существует объект-контекст, в котором эта функция была запущена.
// Контекст функции, как правило, определяется объектом, указанным перед именем функции в момент ее запуска.
// Для доступа к полям контекста используется комбинация "this._имя_поля_".
// Например возьмем объект:
// let cat = {
//   color: "red", // поле со значением объекта cat
//   getColor() { // функция (метод) объекта cat
//     return this.color;
//   }
// }
// Можно запустить его функцию getColor (написав "cat.getColor()").
// В данном случае "контекстом" функции будет объект "cat", а потому внутри функции, запись "this.color" будет означать обращение к полю "cat.color".
// Но, если мы сохраним функцию в другую переменную (let askColor = cat.getColor), то в askColor будет сохранена ссылка (копия) на функцию getColor, но она уже не будет "помнить", что когда-то принадлежала объекту cat.
// Если выполнить команду "askColor()", то, поскольку перед названием функции уже не указано никакого объекта, внутри этой функции "this" уже будет иметь значение "undefined".
// Если нам нужно подставить вместо this какой-нибудь объект, это делается внутренним методом call, который есть у всех функций.
// Выглядит это так: "askColor.call(cat)"
// В этот метод первым аргументом мы передаем объект, на который внутри функции будет ссылаться this, а все остальные аргументы (если они есть) будут переданы в функцию, как ее параметры.
// Возвращаясь к заданию.
// Нужно написать функцию, которая работает с данными из своего контекста (использует this):
// function composeMessage(position) {
//   return Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.;
// }
// Далее, для того, чтобы подставить вместо this внутри функции какой-нибудь объект из массива orders используем метод call:
// Вот так: "composeMessage.call(orders[0], 1)". Теперь внутри функции composeMessage переменная this будет ссылаться на orders[0], а position получит значение 1.
// Далее, нам нужно пройти циклом по всему массиву orders, передавая по очереди каждый заказ таким образом в функцию composeMessage, а ее результат добавлять в массив messages.
// Для этого пишем:
// for (let i=0; i<orders.length; i++) {
// // начиная с нулевого элемента и до конца массива
//  messages.push(composeMessage.call(orders[i], i+1));
// // сохранить в messages результат исполнения composeMessage, подставив orders[i] вместо this, а в качестве position передав i+1 (ведь нумерация должна идти с единицы)
// }


//задача 8

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}


//задача 9

const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');


//задача 10

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']