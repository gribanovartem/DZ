function LocStorage(name) {
    var self = this;
    self.storage = {};
    self.storage.name = [];
    if(localStorage.getItem(name)) {
        self.storage = JSON.parse(localStorage.getItem(name));
      }
    
    self.addValue = function(key, value){
        self.storage.name.push({[key]: value});
        localStorage.setItem(name, JSON.stringify(self.storage.name));
    };

    self.getValue = function(key) {
        let arr = JSON.parse(localStorage.getItem(name));
        for(let i=0; i<arr.length; i++) {
          if(key in arr[i]) {
            return arr[i][key];
          }
        }
    };

    self.deleteValue = function(key) {
        self.storage.name = JSON.parse(localStorage.getItem(name));
        for(let i=0; i<self.storage.name.length; i++) {
          if(key in self.storage.name[i]) {
            self.storage.name.splice(i, 1);
            localStorage.setItem(name, JSON.stringify(self.storage.name));
            return true;
          }
        }
        return false;
    };
    
    self.getKeys = function() {
        self.storage.name = JSON.parse(localStorage.getItem(name));
        let keys =[];
        for(let i=0; i<self.storage.name.length; i++) {
          console.log(Object.keys(self.storage.name[i]))
            keys.push(Object.keys(self.storage.name[i])[0]);
        }
        return keys;
    };
}
var drinkStorage = new LocStorage('drinks');
var foodStorage = new LocStorage('food');