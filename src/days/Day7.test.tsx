import {
	HandType,
	getHandType,
	part1answer,
	part2answer,
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
	describe('part1answer', () => {
		it('returns 6440 for sample data', () => {
			expect(part1answer(sampleInput)).toBe(6440);
		});
	});
});
