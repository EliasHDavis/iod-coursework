const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow : function() {
        this.score++
        return this;
    },
    basket: function() {
        this.score += 2
        return this;
    },
    threePointer: function() {
        this.score += 3
        return this;
    },
    halfTime: function() {
        console.log('Halftime score is '+ this.score + ', the total number of fouls is ' +this.fouls)
        return this;
    },
    finalScore: function() {
        console.log('The final score is ' + this.score + ', the total number of fouls is ' +this.fouls)
        return this;
    },
    addFoul: function() {
        this.fouls++
        return this;
    }
}

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();