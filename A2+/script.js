function deleteSpace(str) {
    for(var i=0; i<str.length; i++) {
      if(str[i]!=' ') {
          break;
      }
    }
    var startSlice = i;
    if(startSlice==str.length-1) {
        return '';
    } 
    else {
        for(var j=str.length-1; j>=0; j--) {
            if(str[j]!=' ') {
                break;
            }
        }
        var endSlice = j+1;
        if(i==0 && j==str.length-1) {
            return str;
        } else {
            return str.slice(startSlice, endSlice);
        }
    }
}
    console.log('*' + deleteSpace("aa abb") + '*');
    console.log('*' + deleteSpace("     a     ") + '*');
    console.log('*' + deleteSpace(" 0ababb    ") + '*');
    console.log('*' + deleteSpace("       ") + '*');