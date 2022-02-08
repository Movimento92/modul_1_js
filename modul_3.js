// задача 1

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top']
};


// задача 2

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
    },
};
  

// задача 3

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки


// задача 4

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Пиши код выше этой строки


// задача 5

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Пиши код выше этой строки


// задача 6

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push('trusted');


// задача 7

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Ямайка',
  city: 'Кингстон',
};


// задача 8

const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Пиши код ниже этой строки
  name,
  price,
  image,
  tags

  // Пиши код выше этой строки
};


// задача 9

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  [emailInputName]: 'henry.carter@aptmail.com',
  
  [passwordInputName]: 'jqueryismyjam'
  // Пиши код выше этой строки
};


// задача 10

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = ['descr', 'rating', 'price'];
const values = ['Просторная квартира в центре', 4, 2153];
// Пиши код ниже этой строки
for (const keys in apartment) {
 keys ;
 values;
}


// задача 11

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
  if (apartment.hasOwnProperty(key)) {
    console.log(key);
    console.log(apartment[key]);
  keys.push(key);
  values.push(apartment[key]);
  }

  // Пиши код выше этой строки
}


// задача 12

function countProps(object) {
  let propCount = 0;
  const array = [];
  // Пиши код ниже этой строки
for (key in object) {
  if (object.hasOwnProperty(key))
    array.push(key);
  propCount = array.length;
}
  // Пиши код выше этой строки
  return propCount;
}


// задача 13

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (const key of keys) {
  
  values.push(apartment[key]);
}


// задача 14

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  const array = []
 const keys = Object.keys(object);
 
for (const key of keys) {
  array.push(key);
  propCount = array.length;
}
  return propCount;
  // Пиши код выше этой строки
}


// задача 15

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);


// задача 16

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
 const value = [];
for (const value of Object.values(salaries)) {
  totalSalary += value;
}

  // Пиши код выше этой строки
  return totalSalary;
}


// задача 17

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
const values = Object.values(colors);
for(const value of values) {
  hexColors.push(value.hex);
  rgbColors.push(value.rgb);
}


// задача 18

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  
  for (const product of products) {
    if (product.name === productName) {
  
  return product.price; 
    }
   }
  return null;
  // Пиши код выше этой строки
}


// задача 19

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const newArray = [];
   for (const product of products) {
    if (product[propName]) {
    newArray.push(product[propName]) 
    }
   }
  return newArray;  
  // Пиши код выше этой строки
}


// задача 20

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let sum = 0;
  for (const product of products) {
    if (product["name"] === productName) {
      sum += product["price"] * product["quantity"];
    }
  }

  return sum;
  // Пиши код выше этой строки
}


// задача 21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


// задача 22

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


// задача 23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// задача 24

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
 rgbColors.push(rgb);
}


// задача 25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const {
  today: {high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
  tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
} = forecast;


// задача 26

// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {
    today: {low: todayLow, high: todayHigh},
    tomorrow: {low: tomorrowLow, high: tomorrowHigh},
  } = forecast;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


// задача 27

const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));


// задача 28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = (Math.max(...allScores));
const worstScore = (Math.min(...allScores));


// задача 29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {...defaultSettings, ...overrideSettings};


// задача 30

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
let object = {completed: completed, category: category, priority: priority, ...data};
   return object;
  // Пиши код выше этой строки
}


// задача 31

// Пиши код ниже этой строки
function add(...args) {
  let total = 0;
  
  for (ad of args) {
    total += ad;
  }
    return total;
  // Пиши код выше этой строки
}


// задача 32

// Пиши код ниже этой строки
function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > value) 
    total += arg;
  }
  
  return total;
  
  // Пиши код выше этой строки
}


// задача 33

// Пиши код ниже этой строки
function findMatches(value, ...args) {
  const matches = []; // Не изменяй эту строку
for (const arg of args){
  if (value.includes(arg)){
    matches.push(arg)
  }
}
  // Пиши код выше этой строки
  return matches;
}


// задача 34

const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
    }
  
  // Пиши код выше этой строки
};


// задача 35

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    
    let indexOfOldBook=this.books.indexOf(oldName);
  this.books.splice(indexOfOldBook, 1, newName);
    // Пиши код выше этой строки
  },
};


// задача 36

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  // Пиши код выше этой строки
};


// задача 37

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
  return this.potions;
  }
  // Пиши код выше этой строки
};


// задача 38

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
  this.potions.push(potionName);    
    // Пиши код выше этой строки
  },
};


// задача 39

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
  let removePotion = this.potions.indexOf(potionName);
  this.potions.splice(removePotion, 1);
    // Пиши код выше этой строки
  },
};


// задача 40

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
  let updatePotionName = this.potions.indexOf(oldName);
  this.potions.splice(updatePotionName, 1, newName);
    // Пиши код выше этой строки
  },
};


// задача 41

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
     const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            if (potionName === potions[i].name) {
                potions.splice(i, 1);
            }
        }
    },
  updatePotionName(oldName, newName) {
      for (const potion of this.potions) {
      if (potion['name'] === oldName) {
      potion['name'] = newName;
      }
    }
    }

  // Пиши код выше этой строки
};


addPotion(newPotion) {
     for (const potion of this.potions) {
      if (Object.values(potion).includes(newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
   }
      this.potions.push(newPotion);
  },
  removePotion(potionName) {
    let potionIndex = "";
   for (const potion of this.potions) {
   if(Object.values(potion).includes(potionName)){
   potionIndex = this.potions.indexOf(potion);
   this.potions.splice(potionIndex, 1);
   return;
   }
   }
    return `Potion ${potionName} is not in inventory!`;
  },