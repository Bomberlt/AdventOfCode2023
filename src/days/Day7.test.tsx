import { part1answer, part2answer } from './Day7';

const sampleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

describe('Day7', () => {
	describe('part1answer', () => {
		it('returns 6440 for sample data', () => {
			expect(part1answer(sampleInput)).toBe(6440);
		});
	});
});
