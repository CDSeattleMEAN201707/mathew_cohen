class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}

class Deck{
    constructor(){
        const suits = ['hearts','clubs','diamonds','spades'];
        this.cards = [];
        for (let i=0; i < suits.length; i++) {
            for (let j = 1; j<=13; j++) {
                this.cards.push(new Card(j, suits[i]));
            }
        }
        for (let j=0; j<this.cards.length; j++) {
            let r = Math.floor(Math.random() * 52);
            var tmp = this.cards[j];
            this.cards[j] = this.cards[r];
            this.cards[r] = tmp;
        }
    }
    loadDeck(){
        for (let i=0; i < suits.length; i++) {
            for (let j=1; j<=13; j++) {
                this.cards.push(new Card(j, suits[i]));
            }
        }
    }
    deal() {
        var topCard = this.cards[this.cards.length-1];
        this.cards.pop();
        return topCard;
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let r = Math.floor(Math.random() * 52);
            var tmp = this.cards[i];
            this.cards[i] = this.cards[r];
            this.cards[r] = tmp;
        }
    }
    reset(){
        this.cards = [];
        loadDeck();
        shuffle();
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    getHand(deck){
        for(let i=0; i<5; i++){
            this.hand.push(deck.deal());
        }
    }
    takeCard(deck){
        this.hand.push(deck.deal());
    }
    discardCard(idx){
        this.hand.splice(idx,1);
    }
}

let deck1 = new Deck();
let player1 = new Player("Mat");
player1.getHand(deck1);
console.log(player1.hand);
player1.discardCard(4);
console.log(player1.hand);
