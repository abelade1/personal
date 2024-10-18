function pairingTest() {
	return false;
}

module.exports = {
	pairingTest,
};

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K',
	'A',
];

const createUnshuffledCard = () => {
	const deck = [];
	for (let suit of suits) {
		for (let value of values) {
			deck.push({ suit, value });
		}
	}
	return deck;
};

const sortDeck = (deck) => {
	return deck.sort(() => Math.random() - 0.5);
};

function createDeck() {
	return sortDeck(createUnshuffledCard());
}

function calculateScore(hand) {
	let score = 0;
	let aceCount = 0;
	for (let card of hand) {
		if (card.value === 'A') {
			aceCount++;
			score += 14;
		} else if (card.value === 'K') {
			switch (card.suit) {
				case 'Spades':
					score += 10;
					break;
				case 'Hearts':
					score += 9;
					break;
				case 'Diamonds':
					score += 8;
					break;
				case 'Clubs':
					score += 7;
					break;
			}
		} else if (card.value === 'Q') {
			score += 6;
		} else if (card.value === 'J') {
			score += 5;
		} else {
			score += parseInt(card.value);
		}
	}
	// while (score > 21 && aceCount > 0){

	// }
	return score;
}

// console.log('createDeck', createDeck());
console.log('Randomly sorted Deck');
const randomlyShuffledDeck = createDeck();
// randomlyShuffledDeck.forEach((card, index) => {
// 	console.log(`${index + 1}. ${formatCard(card)} Value: CalculateScore`);
// });

const topTwoCards = randomlyShuffledDeck.slice(0, 2);
const topTwoCardsScore = calculateScore(topTwoCards);
console.log(`Score: ${topTwoCardsScore}`);
