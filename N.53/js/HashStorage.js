"use strict";

function HashStorage() {
    var self = this;
    self.storage = {};
    self.addValue = function(key, value){
        self.storage[key]=value;
    };

    self.getValue = function(key) {
        return self.storage[key];
    };

    self.deleteValue = function(key) {
        if(key in self.storage) {
            return delete self.storage[key];
        } else return false;
    };
    
    self.getKeys = function() {
       return Object.keys(self.storage);
    };
}

function addDrink() {
    var drinkName = prompt("Название напитка");
    var drink = {};
    drink.alc = (confirm("Он алкогольный?"))?'да':'нет';
    drink.recipe = prompt("Как его приготовить?");
    drinkStorage.addValue(drinkName, drink);
    return drinkStorage;
}
function getDrink() {
    var drinkName = prompt('Про какой напиток вы хотите узнать?');
    var drink = drinkStorage.getValue(drinkName);
    if(drink) {
        alert(`        напиток:  ${drinkName}
        алкогольный: ${drink.alc}
        рецепт приготовления:  ${drink.recipe}`);
    } else {
        alert('Такого напитка нет в базе данных!');
    }
}
function deleteDrink() {
    var drinkName = prompt('Какой напиток вы хотите удалить?');
        if(drinkStorage.deleteValue(drinkName)) {
            return alert('Напиток '+drinkName+' удален!');
        } else return alert('Такого напитка нет в базе данных!');
}
function getAllDrinks() {
    alert(drinkStorage.getKeys());
}

function addFood() {
    var foodName = prompt("Название блюда");
    var food = {};
    food.time = (confirm("Оно долго готовится?"))?'да':'нет';
    food.recipe = prompt("Как его приготовить?");
    foodStorage.addValue(foodName, food);
    return foodStorage;
}
function getFood() {
    var foodName = prompt('Про какое блюдо вы хотите узнать?');
    var food = foodStorage.getValue(foodName);
    if(food) {
        alert(`        блюдо:  ${foodName}
        долго готовится: ${food.time}
        рецепт приготовления:  ${food.recipe}`);
    } else {
        alert('Такого блюда нет в базе данных!');
    }
}
function deleteFood() {
    var foodName = prompt('Какое блюдо вы хотите удалить?');
        if(foodStorage.deleteValue(foodName)) {
            return alert('Блюдо '+foodName+' удалено!');
        } else return alert('Такого блюда нет в базе данных!');
}
function getAllFood() {
    alert(foodStorage.getKeys());
}