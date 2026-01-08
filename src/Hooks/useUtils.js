export function getRandomUniqueNumbers(total, pickCount) {
	const allNumbers = Array.from({ length: total }, (_, i) => i + 1);
	for (let i = allNumbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
	}

	return allNumbers.slice(0, pickCount);
};
export function shuffleArray(array) {
	const copy = [...array];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}; 