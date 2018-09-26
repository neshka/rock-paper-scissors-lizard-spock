var paper = 'paper';
var rock = 'rock';
var scissors = 'scissors';
var lizard = 'lizard';
var spock = 'spock';

function compare(hand1, hand2) {
    if (hand2 === paper) {
        //make sure paper is always in hand1
        hand2 = hand1;
        hand1 = paper;
    }

    if (hand1 === paper && hand2 === rock) {
        return paper;
    }

    if (hand1 === paper && hand2 === scissors) {
        return scissors;
    }

    if (hand1 === paper && hand2 === lizard) {
        return lizard;
    }

    if (hand1 === paper && hand2 === spock) {
        return spock;
    }

    if (hand2 === rock) {
        //make sure rock is always in hand1
        hand2 = hand1;
        hand1 = rock;
    }

    if (hand1 === rock && hand2 === scissors) {
        return rock;
    }
}

module.exports.compare = compare;