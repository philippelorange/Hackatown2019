
var entries = [];

function addEntry(name, date, amount, metaData){
    var entry = {
        name: name,
        date: date,
        amount: amount,
        metaData: metaData
      };
    
    entries.push(entry);
}

function getTotalExpenses(){
    var sum = 0;
   for(var i = 0; i < entries.length(); ++i){
        sum += entries[i].amount;
   }
   return sum;
}