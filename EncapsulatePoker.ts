/*
    indentify data
    identify associate behavior
    group them together
*/

/*
    data
    card => number and suits
    hand => five card
*/

/*
    behavior 
    hand 
    - create from five card
    - compare 
*/

/*
    data structure comparison
    -rank
    -high
*/

/*
    logical steps to compare hands
    -compare rank in order
    -compare highs if rank is the same
 */

// we can easily compare highs if it is sorted by significant

// sign of card
export enum Suits {
    Spade,
    Diamond,
    Heart,
    Club
}

// status when compare
export enum ComparisonResult {
    Win,
    Lose,
    Draw
}

// inherit card 
export class Card{
    number: number;
    suits: Suits;

    constructor (number: number, suits: Suits) {
        this.number = number;
        this.suits = suits;
    }
}

// group of rank card
export enum Rank {
    Nothing = 0,
    OnePair = 1,
    TwoPair = 2,
    ThreeOfKing = 3,
    Strainght = 4,
    Flush = 5,
    FullHouse = 6,
    FourOfKind = 7,
    StrainghtFlush = 8
}

// type aliases of data with two type
// emigrate to short logic
// type HandPower = {
//     rank: Rank;
//     highs: number[];
// }


// when the class is encapsulate the variable and method in it that can guide the developer of the class can do the feature in it
// emigrate to short logic
// export class Hand {
//     private cards: Card[];

//     constructor(cards: Card[]){
//         this.cards = cards;
//     }

//     // throw the error
//     public power(): HandPower {
//         throw new Error('Not implemented');
//     }

//     // compare the card group and return by the player status
//     public compareWith(anotherHand: Hand): ComparisonResult {
//         // know just rank can compare it
//         const { rank } = this.power();
//         const anotherHandPower = anotherHand.power();
//         const anotherRank = anotherHandPower.rank

//         if (rank > anotherRank) {
//             return ComparisonResult.Win;
//         }

//         if (rank < anotherRank) {
//             return ComparisonResult.Win;
//         }

//         return this.compareHighs(anotherHandPower.highs);
//     }

//     private compareHighs(anotherHighs: number[]): ComparisonResult {
//         const  { highs } = this.power();

//         for ( let index = 0; index < highs.length; index++) {

//             if (highs[index] > anotherHighs[index]) {
//                 return ComparisonResult.Win;
//             }

//             if (highs[index] < anotherHighs[index]) {
//                 return ComparisonResult.Lose;
//             }
//         }

//         return ComparisonResult.Draw;
//     }
// }
export class Hand {
    private cards: Card[];

    constructor(cards: Card[]) {
        // filer logic
        // transform
        // check 5
        this.cards = cards;
    }

    public compareWith(anotherHand: Hand): ComparisonResult {
        return this.power().compareWith(anotherHand.power());
    }

    public power(): HandPower {
        throw new Error('Not implemented');
    }
}


export class HandPower {
    constructor(public readonly rank: Rank, public readonly highs: number []) {}

    private compareHighs (handPower: HandPower): ComparisonResult {

        for (let index = 0; index < this.highs.length; index++) {
            if (this.highs [index]> handPower.highs [index]) {
                return ComparisonResult.Win;
            }   
            if (this.highs [index] < handPower.highs [index]) {
                return ComparisonResult.Lose;
            }
        }
        return ComparisonResult.Draw;
    }

    public compareWith (anotherHandPower: HandPower): ComparisonResult {
        const anotherRank = anotherHandPower.rank

        if (this.rank > anotherRank) {
            return ComparisonResult.Win;
        }
        if (this.rank < anotherRank) {
            return ComparisonResult.Lose;
        }
        return this.compareHighs(anotherHandPower);
    }
}


// Usage
const straighFlushCards = [
    new Card (14, Suits.Club),
    new Card (13, Suits.Club),
    new Card (12, Suits.Club),
    new Card (10, Suits. Club),
    new Card (11, Suits.Club),
];

const onePairCards = [
    new Card (10, Suits. Club),
    new Card(10, Suits.Diamond),
    new Card (14, Suits.Club),
    new Card (12, Suits.Club),
    new Card (11, Suits.Club),
];


const straighFlushHand = new Hand (straighFlushCards);
const onePairHand = new Hand (onePairCards);
// Guide the data in class => use encapsulate to show of the method in the class can use when dot after object => onePairHand.
const result = straighFlushHand.compareWith(onePairHand);