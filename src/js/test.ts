var User2 = function () {
    this.x = 'box'
    console.log(this);
}

User2.prototype.getConsole = function () {
    return this.x;
}

var test = new User2();
console.log(test.getConsole());
