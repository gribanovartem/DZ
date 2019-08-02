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
var drinkStorage = new HashStorage();

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