"use strict";

// создание родительского/базового класса
class Transport {
    constructor(type, price, brand, doors, maxSpeed, image) {
        this.type = type,
            this.price = price,
            this.brand = brand,
            this.doors = null,
            this.maxSpeed = null,
            this.image = image
    }

    // создание метода для вывода инфо
    getInfo() {
        return this.type,
            this.brand,
            this.image
    }

    // создание метода для вывода цены
    getPrice = function () {
        return this.price;
    }
}


// создание дочернего класса
class Car extends Transport {
    constructor(type, price, brand, doors, image) {
        super(type, price, brand, doors, image);
        this.type = type,
            this.price = price,
            this.brand = brand,
            this.doors = doors;
        this.image = image;
    }

    // геттер для вывода количества дверей
    getDoorsCount() {
        return this.doors;
    }
}


// создание дочернего класса
class Bike extends Transport {
    constructor(type, price, brand, maxSpeed, image) {
        super(type, price, brand, maxSpeed);
        this.type = type,
            this.price = price,
            this.brand = brand,
            this.brand = brand;
        this.image = image;
    }

    // геттер для вывода максимальной скорости
    getMaxSpeed() {
        return this.maxSpeed;
    }
}


// Создание массивов для машин и мотоциклов
let cars = [];
let bikes = [];

// Перебор массива с данными по транспорту
data.forEach((item) => {
    let type = item.type;
    let brand = item.brand;
    let price = item.price;
    let doors = item.doors;
    let maxSpeed = item.maxSpeed;
    let image = item.image;

    if (type === 'car') {
        cars.push({ type, price, brand, doors, image });

        let newCar = new Car(type, price, brand, doors, image);
        // console.log(newCar);
    }

    else if (type === 'bike') {
        bikes.push({ type, price, brand, maxSpeed, image });

        let newBike = new Bike(type, price, brand, maxSpeed, image);
        // console.log(newBike);
    }

});


// Функция для вставки инфо на экран
function insertInfo(arr) {
    // Создание блока для вставки инфо
    let container = document.querySelector('.container');

    arr.forEach((item) => {
        let div = document.createElement('div');
        div.classList = 'transport';

        let h2 = document.createElement('h2');
        h2.classList = 'title';
        h2.textContent = item.brand;

        let img = document.createElement('img');
        img.src = item.image;
        img.alt = `${item.brand}`;

        let p = document.createElement('p');
        p.classList = 'main_info';
        if (arr === cars) {
            p.textContent = `Цена: ${item.price} рублей, количество дверей: ${item.doors}.`;
        }
        else {
            p.textContent = `Цена: ${item.price}, максимальная скорость: ${item.maxSpeed} км/ч.`;
        }

        // Вывод инфо на экран
        container.append(div);
        div.append(h2);
        div.append(img);
        div.append(p);

    });

}

// Вызов функции для каждого массива
insertInfo(cars);
insertInfo(bikes);










