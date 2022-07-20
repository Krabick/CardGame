class Card {
    constructor (id, name, strength, health) {
        this.id = id;
        this.CardName = name;
        this.strength = strength;
        this.health = health;
    }

}

class Player {
    constructor (name) {
        this.name = name
        this.health = 20;
        this.hand = new PlayersHand()
        this.hand.drawFullHand()
    }
    getOut(ID) {
        for (let i = 0; i < this.hand.length; i++) {
            if (this.hand[i].ID === ID){
                let ResultCard = this.hand[i]
                this.hand[i] = "delete"
                this.hand = this.hand.filter(value => value !== "delete")
                return ResultCard;
            }
        }

    }
    pushToHand(card) {
     this.hand.push(card)
    }
}

class PlayersHand {
    constructor () {
        this.Stack = [];
    }
    drawFullHand() {
        let a = 0
        for (let i = 0; i < 5; i++) {
            this.Stack.push(new Card(a, "Карточка", "5", "5"))
            a += 1
        }
    }
}

class Field {
    constructor() {
        this.FirstPlayerSide = [];
        this.SecondPlayerSide = [];
    }
    Round(FirstPlayerCardID, SecondPlayerCardID) {
        let FirstPlayerCard = player1.getoOut(FirstPlayerCardID)
        let SecondPlayerCard = player2.getoOut(SecondPlayerCardID)
        if (typeof FirstPlayerCard === "object" && typeof SecondPlayerCard === "object") {
            this.FirstPlayerSide.push(FirstPlayerCard)
            console.log("Со стороны " + player1.name + " на поле выходит " + FirstPlayerCard.name + " !"  )
            this.SecondPlayerSide.push(SecondPlayerCard)
            console.log("Со стороны " + player2.name + " на поле выходит " + SecondPlayerCard.name + " !"  )
            console.log(this.WhoIsTheWinner())
        }
    }

    WhoIsTheWinner(){
        if (this.FirstPlayerSide[0].strength >= this.SecondPlayerSide[0].health && this.SecondPlayerSide[0].strength >= this.FirstPlayerSide[0].health ) {
            this.FirstPlayerSide.pop

            this.SecondPlayerSide.pop
            return "У нас ничья! Обе карты повержены!"
        } else if (this.FirstPlayerSide[0].strength >= this.SecondPlayerSide[0].health) {
            this.SecondPlayerSide.pop
            player1.pushToHand (FirstPlayerSide[0])
            this.FirstPlayerSide.pop

            return "Карта второго игрока повержена"
        } else if (this.FirstPlayerSide[0].strength >= this.SecondPlayerSide[0].health) {
            this.FirstPlayerSide.pop
            player2.pushToHand (this.SecondPlayerSide[0])
            this.SecondPlayerSide.pop

            return "Карта второго игрока повержена"
        } else {
            player1.pushToHand(this.FirstPlayerSide[0])
            player2.pushToHand(this.SecondPlayerSide[0])

            return "У нас ничья! Никто никого не убил!"
        }
    }
}




const a = new PlayersHand()
a.drawFullHand()

console.log(a)