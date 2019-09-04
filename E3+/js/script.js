var menu=[
    {name:'Пункт 1',submenu:
      [
        {name:'Пункт 1.1',submenu:
          [
            {name:'Пункт 1.1.1',url:'http://www.tut.by'},
            {name:'Пункт 1.1.2 длинный',url:'http://www.tut.by'}
          ]
        },
        {name:'Пункт 1.2',url:'http://www.tut.by'},
        {name:'Пункт 1.3 длинный',submenu:
          [
            {name:'Пункт 1.3.1',url:'http://www.tut.by'},
            {name:'Пункт 1.3.2',url:'http://www.tut.by'},
            {name:'Пункт 1.3.3',url:'http://www.tut.by'},
            {name:'Пункт 1.3.4 длинный',url:'http://www.tut.by'}
          ]
        }
      ]
    },
    {name:'Пункт 2 длинный',url:'http://www.tut.by'},
    {name:'Пункт 3',submenu:
      [
        {name:'Пункт 3.1 длинный',url:'http://www.tut.by'},
        {name:'Пункт 3.2',url:'http://www.tut.by'}
      ]
    }
  ];
  function showMenu(arr) {
    let mainMenu = document.createElement('ul');
    mainMenu.classList.add('mainMenu');
    document.body.appendChild(mainMenu);
    for(let i=0; i<arr.length; i++) {
        let li = document.createElement('li');
        mainMenu.appendChild(li); 
        let item = document.createElement('a');
        item.classList.add('mainMenuLink');
        item.textContent = arr[i].name;
        if('url' in arr[i]) {
            item.setAttribute('href', arr[i].url);
            item.setAttribute('target', 'blank');
        }
        if('submenu' in arr[i]) {
            let text = arr[i].name + '&darr;';
            item.innerHTML = text;
            item.addEventListener('mouseenter', function(EO) {showSubMenu(EO, arr[i].submenu)}, false);
            item.addEventListener('mouseleave', hideSubMenu, false);
        }
        li.appendChild(item); 
    }
    function showSubMenu(EO, arr1) {
      EO=EO||window.event;
      EO.preventDefault();
      let top = 50;
      for(let i=0; i<arr1.length; i++) {
          let li = document.createElement('li');
          EO.target.appendChild(li); 
          let item = document.createElement('a');
          item.classList.add('subMenuLink');
          item.textContent = arr1[i].name;
          item.style.top = top + 'px';
          top += 50;
          if('url' in arr1[i]) {
              item.setAttribute('href', arr1[i].url);
              item.setAttribute('target', 'blank');
          }
          if('submenu' in arr1[i]) {
              let text = arr1[i].name + '&rarr;';
              item.innerHTML = text;
              item.addEventListener('mouseenter', function(EO) {showSubMenuRight(EO, arr1[i].submenu)}, false);
              item.addEventListener('mouseleave', hideSubMenu, false);
          }
          li.appendChild(item); 
      }
  }
  function showSubMenuRight(EO, arr1) {
      EO=EO||window.event;
      EO.preventDefault();
      let left = 230;
      let top = 0;
      for(let i=0; i<arr1.length; i++) {
          let li = document.createElement('li');
          EO.target.appendChild(li); 
          let item = document.createElement('a');
          item.classList.add('subMenuLink');
          item.textContent = arr1[i].name;
          item.style.left = left + 'px';
          item.style.top = top + 'px';
          top += 50;
          if('url' in arr1[i]) {
              item.setAttribute('href', arr1[i].url);
              item.setAttribute('target', 'blank');
          }
          if('submenu' in arr1[i]) {
              let text = arr1[i].name + '&rarr;';
              item.innerHTML = text;
              item.addEventListener('mouseenter', function(EO) {showSubMenuRight(EO, arr1[i].submenu)}, false);
              item.addEventListener('mouseleave', hideSubMenu, false);
          }
          li.appendChild(item); 
      }
  }
  function hideSubMenu(EO) {
      EO=EO||window.event;
      EO.preventDefault();
      for(let i=EO.target.children.length-1; i>=0; i--) {
          EO.target.children[i].remove();
      }
  }
}
showMenu(menu);
