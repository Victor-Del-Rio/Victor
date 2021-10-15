const cashRegister = {
        total: 0,
        item: 0
    };
/*
function cashRegister(total, item) {
    this.total = total;
    this.item = item;
}*/

cashRegister.add = function(itemCost) {
    cashRegister.total += itemCost;
    //console.log(cashRegister.total);
    //console.log(itemCost);
};

function scan() {
    cashRegister.item = prompt("Enter total number of items:");
    for (var i = 1; i <= cashRegister.item; i++) {
        var temp = prompt("Enter cost of item " + i);
        cashRegister.add(parseFloat(temp));
        //console.log(temp);
        //console.log(i);
    }
    //console.log(this.total);
}

function print() {
    if (cashRegister.total == 0) {
        alert("Please enter your item prices first");
    } else {
        //var print = promt(this.total);
        confirm("$" + cashRegister.total);
        cashRegister.total = 0;
    }
}