function wordTrasform(word1, word2) {
    var vocab = ["ТАРА","ЛИПА","ТУРА","ЛУЖА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК","ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"];
    vocab.push(word2);
    var finalStringArr = [word1];
    function wordTrasform1(word) {
        for(var i=0; i<vocab.length; i++) {
            var count = 0;
            for(var j=0; j<vocab[i].length; j++) {
                if(vocab[i][j]==word[j]) {
                    count++;
                }
            } 
            if(count==3) {
                finalStringArr.push(vocab[i]);
                vocab.splice(i,1);
            }
        }
        if(finalStringArr[finalStringArr.length-1]!=word2) {
            return wordTrasform1(finalStringArr[finalStringArr.length-1]);
        } else {
            return finalStringArr;
        }
    }
    return wordTrasform1(word1).join('-');
}
console.log(wordTrasform("ЛИСА", "ЛОСЬ"));
console.log(wordTrasform("МУХА", "СЛОН"));