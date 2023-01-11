describe("A grid when initialized correctly", function() {

	beforeEach(function() {
		init_gridConfig(20, 20, 50, 500, 400);
	});

	it(" calculates number points in X dimension when canvas width greater than gird X offset",
		function () {
			expect(xAxisGridPoints()).toBe(9);
		});

	it(" calculates number of points in Y dimension when canvas height greater than gird Y offset",
		function () {
			expect(yAxisGridPoints()).toBe(7);
		});

	it(" cannot calculate number of points in X dimension if canvas width is too small",
		function () {
			gridConfig.canvasWidth = 10;

			expect(function () { xAxisGridPoints(); }).toThrow("Canvas width less than grid start offset");
		});

	it(" cannot calculate number of points in Y dimension if canvas height is too small",
		function () {
			gridConfig.canvasHeight = 10;

			expect(function () { yAxisGridPoints(); }).toThrow("Canvas height less than grid start offset");
		});

	xIndexes = [
		{ index: 0, expected: 20 },
		{ index: 5, expected: 270 },
		{ index: 9, expected: 470 }
	].forEach(({ index, expected }) => {
		it(" calculatex X coordinate of a grid point given an index of " + index,
			function() {
				expect(gridPointX(index)).toBe(expected);
			});
	});

	yIndexes = [
		{ index: 0, expected: 20 },
		{ index: 3, expected: 170 },
		{ index: 7, expected: 370 }
	].forEach(({ index, expected }) => {
		it(" calculatex Y coordinate of a grid point given an index of " + index,
			function () {
				expect(gridPointY(index)).toBe(expected);
			});
	});

	xIndexes = [
		{ start: 0, end: 1, expected: 45 },
		{ start: 1, end: 0, expected: 45 },
		{ start: 3, end: 4, expected: 195 },
		{ start: 8, end: 9, expected: 445 }
	].forEach(({ start, end, expected }) => {
		it(" calculatex X coordinate of a component given a start and end index of " + start + " and end index of " + end,
			function () {
				expect(componentPointX(start,end)).toBe(expected);
			});
	});

	xIndexes = [
		{ start: 0, end: 1, expected: 45 },
		{ start: 1, end: 0, expected: 45 },
		{ start: 7, end: 6, expected: 345 },
		{ start: 6, end: 7, expected: 345 }
	].forEach(({ start, end, expected }) => {
		it(" calculatex Y coordinate of a component given a start index of " + start + " and end index of " + end,
			function () {
				expect(componentPointY(start, end)).toBe(expected);
			});
	});
});

describe("A grid when initialized with default values", function () {

	beforeEach(function () {
		init_gridConfig(0, 0, 0);
	});

	it(" cannot calculate number of points in X dimension",
		function () {
			var canvasWidth = 500;

			expect(function () { xAxisGridPoints(); }).toThrow("Size between points not initialized");
		});

	it(" cannot calculate number of points in Y dimension",
		function () {
			var canvasWidth = 400;

			expect(function () { yAxisGridPoints(); }).toThrow("Size between points not initialized");
		});
});