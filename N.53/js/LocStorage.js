function LocStorage(name) {
    var self = this;
    self.storage = {name: []};
    if(localStorage.getItem(name)) {
        self.storage = JSON.parse(localStorage.getItem(name));
      }
    
    self.addValue = function(key, value){
        // self.storage[key]=value;
        self.storage.name.push({key: value});
        localStorage.setItem(name, JSON.stringify(self.storage));
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
var drinkStorage = new LocStorage();