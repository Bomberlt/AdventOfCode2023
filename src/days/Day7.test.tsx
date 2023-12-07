import {
	HandType,
	getHandType,
	part1answer,
	part2answer,
	rankHands,
	readHands,
} from './Day7';

const sampleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const sampleHands = [
	{
		hand: '32T3K',
		bid: 765,
	},
	{
		hand: 'T55J5',
		bid: 684,
	},
	{
		hand: 'KK677',
		bid: 28,
	},
	{
		hand: 'KTJJT',
		bid: 220,
	},
	{
		hand: 'QQQJA',
		bid: 483,
	},
];

describe('Day7', () => {
	describe('readHands', () => {
		it('reads sample hands', () => {
			expect(readHands(sampleInput)).toEqual(sampleHands);
		});
	});

	describe('getHandType', () => {
		it('returns onePair for first sample hand', () => {
			expect(getHandType(sampleHands[0].hand)).toBe(HandType.onePair);
		});
		it('returns three of a kind for T55J5 ', () => {
			expect(getHandType('T55J5')).toBe(HandType.threeOfaKind);
		});
		it('returns two pair for KK677 ', () => {
			expect(getHandType('KK677')).toBe(HandType.twoPair);
		});
	});
	describe('rankHands', () => {
		it('returns 1 for bigger hand type', () => {
			const hand1 = {
				hand: '32T3K',
				bid: 765,
				type: HandType.fiveOfaKind,
			};
			const hand2 = {
				hand: '32T3K',
				bid: 765,
				type: HandType.fourOfaKind,
			};
			expect(rankHands(hand1, hand2)).toBe(1);
		});
		it('returns -1 for smaller hand type', () => {
			const hand1 = {
				hand: '32T3K',
				bid: 765,
				type: HandType.highCard,
			};
			const hand2 = {
				hand: '32T3K',
				bid: 765,
				type: HandType.onePair,
			};
			expect(rankHands(hand1, hand2)).toBe(-1);
		});
		it('returns 1 for bigger first card when same types', () => {
			const hand1 = {
				hand: '33332',
				bid: 765,
				type: HandType.fourOfaKind,
			};
			const hand2 = {
				hand: '2AAAA',
				bid: 765,
				type: HandType.fourOfaKind,
			};
			expect(rankHands(hand1, hand2)).toBe(1);
		});
		it('returns 1 for bigger third card when same types', () => {
			const hand1 = {
				hand: '77888',
				bid: 765,
				type: HandType.fullHouse,
			};
			const hand2 = {
				hand: '77788',
				bid: 765,
				type: HandType.fullHouse,
			};
			expect(rankHands(hand1, hand2)).toBe(1);
		});
	});
	describe('part1answer', () => {
		it('returns 6440 for sample data', () => {
			expect(part1answer(sampleInput)).toBe(6440);
		});
	});
});
