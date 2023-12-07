import { useState } from 'react';
import { input as dayInput } from '../inputs/day7input.ts';
import Day from './Day.tsx';

export enum HandType {
	highCard = 0,
	onePair,
	twoPair,
	threeOfaKind,
	fullHouse,
	fourOfaKind,
	fiveOfaKind,
}

export interface Hand {
	hand: string;
	bid: number;
	type?: HandType;
	rank?: number;
}

export const readHands = (input: string): Hand[] => {
	const lines = input.split('\n');
	return lines.map((line) => {
		const [hand, bid] = line.split(' ');
		return {
			hand,
			bid: parseInt(bid),
		};
	});
};

export interface Seq {
	seqCard: string;
	count: number;
}

export const getHandType = (hand: string): HandType => {
	const cards = hand.split('');
	// First card
	const seqs: Seq[] = [{ seqCard: cards[0], count: 1 }];

	// Second card
	if (cards[1] === seqs[0].seqCard) {
		seqs[0].count++;
	} else {
		seqs.push({ seqCard: cards[1], count: 1 });
	}

	// Third card
	let lastSeq = seqs.find((seq) => seq.seqCard === cards[2]);
	if (lastSeq) {
		lastSeq.count++;
	} else {
		seqs.push({ seqCard: cards[2], count: 1 });
	}

	// Fourth card
	lastSeq = seqs.find((seq) => seq.seqCard === cards[3]);
	if (lastSeq) {
		lastSeq.count++;
	} else {
		seqs.push({ seqCard: cards[3], count: 1 });
	}

	// Fifth card
	lastSeq = seqs.find((seq) => seq.seqCard === cards[4]);
	if (lastSeq) {
		lastSeq.count++;
	} else {
		seqs.push({ seqCard: cards[4], count: 1 });
	}

	if (seqs.length === 1) {
		return HandType.fiveOfaKind;
	} else if (seqs.length === 2) {
		if (seqs.some((seq) => seq.count === 4)) {
			return HandType.fourOfaKind;
		} else {
			return HandType.fullHouse;
		}
	} else if (seqs.length === 3) {
		if (seqs.some((seq) => seq.count === 3)) {
			return HandType.threeOfaKind;
		} else {
			return HandType.twoPair;
		}
	} else if (seqs.length === 4) {
		return HandType.onePair;
	} else if (seqs.length === 5) {
		return HandType.highCard;
	} else {
		throw new Error('Unknown hand type');
	}
};

export const rankHands = (first: Hand, second: Hand): number => {
	if ((first.type as HandType) > (second.type as HandType)) {
		return 1;
	} else if ((first.type as HandType) < (second.type as HandType)) {
		return -1;
	}

	let cardToCompare = 0;
	while (
		first.hand[cardToCompare] === second.hand[cardToCompare] &&
		cardToCompare < 4
	) {
		cardToCompare++;
	}
	const firstCard = first.hand[cardToCompare];
	const secondCard = second.hand[cardToCompare];
	if (
		isNaN(parseInt(firstCard)) &&
		firstCard !== 'T' &&
		isNaN(parseInt(secondCard)) &&
		secondCard !== 'T'
	) {
		// 'A' and 'J'
		if (firstCard === 'A' || secondCard === 'J') {
			return 1;
		} else if (secondCard === 'A' || firstCard === 'J') {
			return -1;
		}

		// 'K' and 'Q'
		if (firstCard === 'K') {
			return 1;
		} else {
			return -1;
		}
	}

	// 'T' and letter
	if (isNaN(parseInt(firstCard)) && isNaN(parseInt(secondCard))) {
		return firstCard === 'T' ? -1 : 1;
	}

	// number and number or letter and number
	return firstCard > secondCard ? 1 : -1;
};

export const part1answer = (input: string): number => {
	const hands = readHands(input);
	const handsWithType = hands.map((hand) => ({
		...hand,
		type: getHandType(hand.hand),
	}));
	const rankedHands = handsWithType.sort((a, b) => rankHands(a, b));
	const handsWinnings = rankedHands.map((hand, i) => hand.bid * (i + 1));
	// console.log('rankedHands', rankedHands);
	// console.log('handsWinnings', handsWinnings);
	return handsWinnings.reduce((acc, winning) => acc + winning, 0);
};

export const getHandTypeWithJokerRule = (hand: string): HandType => {
	const cards = hand.split('');
	let jokerCount = 0;
	const seqs: Seq[] = [];
	let lastSeq;

	// First card
	let card = cards[0];
	if (card === 'J') {
		jokerCount++;
	} else {
		lastSeq = seqs.find((seq) => seq.seqCard === card);
		if (lastSeq) {
			lastSeq.count++;
		} else {
			seqs.push({ seqCard: card, count: 1 });
		}
	}

	// Second card
	card = cards[1];
	if (card === 'J') {
		jokerCount++;
	} else {
		lastSeq = seqs.find((seq) => seq.seqCard === card);
		if (lastSeq) {
			lastSeq.count++;
		} else {
			seqs.push({ seqCard: card, count: 1 });
		}
	}

	// Third card
	card = cards[2];
	if (card === 'J') {
		jokerCount++;
	} else {
		lastSeq = seqs.find((seq) => seq.seqCard === card);
		if (lastSeq) {
			lastSeq.count++;
		} else {
			seqs.push({ seqCard: card, count: 1 });
		}
	}

	// Fourth card
	card = cards[3];
	if (card === 'J') {
		jokerCount++;
	} else {
		lastSeq = seqs.find((seq) => seq.seqCard === card);
		if (lastSeq) {
			lastSeq.count++;
		} else {
			seqs.push({ seqCard: card, count: 1 });
		}
	}

	// Fifth card
	card = cards[4];
	if (card === 'J') {
		jokerCount++;
	} else {
		lastSeq = seqs.find((seq) => seq.seqCard === card);
		if (lastSeq) {
			lastSeq.count++;
		} else {
			seqs.push({ seqCard: card, count: 1 });
		}
	}

	// console.log('seqs', seqs);
	// console.log('jokerCount', jokerCount);
	if (jokerCount === 5) {
		return HandType.fiveOfaKind;
	}
	if (jokerCount > 0) {
		const biggestSeq = seqs.sort((a, b) => a.count - b.count).at(-1) as Seq;
		biggestSeq.count = biggestSeq.count + jokerCount;
	}
	// console.log('seqs', seqs);

	if (seqs.length === 1) {
		return HandType.fiveOfaKind;
	} else if (seqs.length === 2) {
		if (seqs.some((seq) => seq.count === 4)) {
			return HandType.fourOfaKind;
		} else {
			return HandType.fullHouse;
		}
	} else if (seqs.length === 3) {
		if (seqs.some((seq) => seq.count === 3)) {
			return HandType.threeOfaKind;
		} else {
			return HandType.twoPair;
		}
	} else if (seqs.length === 4) {
		return HandType.onePair;
	} else if (seqs.length === 5) {
		return HandType.highCard;
	} else {
		throw new Error('Unknown hand type');
	}
};

export const rankHandsWithJoker = (first: Hand, second: Hand): number => {
	if ((first.type as HandType) > (second.type as HandType)) {
		return 1;
	} else if ((first.type as HandType) < (second.type as HandType)) {
		return -1;
	}

	let cardToCompare = 0;
	while (
		first.hand[cardToCompare] === second.hand[cardToCompare] &&
		cardToCompare < 4
	) {
		cardToCompare++;
	}
	const firstCard =
		first.hand[cardToCompare] === 'J' ? '0' : first.hand[cardToCompare];
	const secondCard =
		second.hand[cardToCompare] === 'J' ? '0' : second.hand[cardToCompare];
	if (
		isNaN(parseInt(firstCard)) &&
		firstCard !== 'J' &&
		isNaN(parseInt(secondCard)) &&
		secondCard !== 'J'
	) {
		// 'A' and 'T'
		if (firstCard === 'A' || secondCard === 'T') {
			return 1;
		} else if (secondCard === 'A' || firstCard === 'T') {
			return -1;
		}

		// 'K' and 'Q'
		if (firstCard === 'K') {
			return 1;
		} else {
			return -1;
		}
	}

	// // 'J' and letter
	// if (isNaN(parseInt(firstCard)) && isNaN(parseInt(secondCard))) {
	// 	return firstCard === 'J' ? -1 : 1;
	// }

	// number and number or letter and number
	return firstCard > secondCard ? 1 : -1;
};

export const part2answer = (input: string): number => {
	const hands = readHands(input);
	const handsWithType = hands.map((hand) => ({
		...hand,
		type: getHandTypeWithJokerRule(hand.hand),
	}));
	const rankedHands = handsWithType.sort((a, b) => rankHandsWithJoker(a, b));
	const handsWinnings = rankedHands.map((hand, i) => hand.bid * (i + 1));
	console.log('rankedHands', rankedHands);
	console.log('handsWinnings', handsWinnings);
	return handsWinnings.reduce((acc, winning) => acc + winning, 0);
};

const Day7 = () => {
	const [part, setPart] = useState(1);
	const [answer, setAnswer] = useState<number | undefined>();
	const [answer2, setAnswer2] = useState<number | undefined>();
	const getAnswer = () => {
		part === 1
			? setAnswer(part1answer(dayInput))
			: setAnswer2(part2answer(dayInput));
	};

	return (
		<div>
			<Day
				dayNumber={3}
				part={part}
				setPart={(partNo) => {
					setPart(partNo);
					setAnswer(undefined);
				}}
			>
				<div className='container'>
					<div className='container-rows'>
						<div>List of hands: </div>
						<div className='document' style={{ display: 'block' }}>
							{dayInput.split('\n').map((line, i) => (
								<span key={i}>{line}; </span>
							))}
						</div>
					</div>
					<div className='container-rows'>
						<button onClick={() => getAnswer()} disabled={answer !== undefined}>
							answer button
						</button>
						<>
							{part === 1 ? (
								<div>Answer = {answer}</div>
							) : (
								<div>Part 2 answer = {answer2}</div>
							)}
						</>
					</div>
				</div>
			</Day>
		</div>
	);
};

export default Day7;
