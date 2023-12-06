//create a constructor for a player object with a name

function Player(name) {
    this.name = name;
    this.level = 1;
    this.points = 0;
}


Player.prototype = {
    gainXp: function(num) {
        this.points += num;

        if (this.points >= 10) {
            this.level ++;
            this.points -= 10;
        }
    }, 

    describe: function() {
        console.log(`${this.name} is level ${this.level} with ${this.points} experience points`);
    }
}

let player1 = new Player('Bob'); 


player1.describe();