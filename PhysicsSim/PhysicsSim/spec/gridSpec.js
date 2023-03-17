describe("A grid when initialized correctly", function() {

	beforeEach(function() {
		init_gridConfig(20, 20, 50, 500, 400);
	});

	it(" calculates number points in X dimension when canvas width greater than gird X offset",
		function () {
			expect(gridConfig.xAxisGridPoints).toBe(9);
		});

	it(" calculates number of points in Y dimension when canvas height greater than gird Y offset",
		function () {
			expect(gridConfig.yAxisGridPoints).toBe(7);
		});

	//it(" cannot calculate number of points in X dimension if canvas width is too small",
	//	function () {
	//		gridConfig.canvasWidth = 10;

	//		expect(function () { gridConfig.xAxisGridPoints; }).toThrow("Canvas width less than grid start offset");
	//	});

	//it(" cannot calculate number of points in Y dimension if canvas height is too small",
	//	function () {
	//		gridConfig.canvasHeight = 10;

	//		expect(function () { gridConfig.yAxisGridPoints; }).toThrow("Canvas height less than grid start offset");
	//	});

	indexes = [
		{ index: new Coordinate(0, 0), expectedX: 20, expectedY: 20 },
		{ index: new Coordinate(5, 3), expectedX: 270, expectedY: 170 },
		{ index: new Coordinate(9, 7), expectedX: 470, expectedY: 370 }
	].forEach(({ index, expectedX, expectedY }) => {
		it(" calculate coordinate of a grid point given an indexes of (" + index.x + "," + index.y + ")",
			function() {
				expect(index.pxX()).toBe(expectedX);
				expect(index.pxY()).toBe(expectedY);
			});
	});

	//xIndexes = [
	//	{ start: 0, end: 1, expected: 45 },
	//	{ start: 1, end: 0, expected: 45 },
	//	{ start: 3, end: 4, expected: 195 },
	//	{ start: 8, end: 9, expected: 445 }
	//].forEach(({ start, end, expected }) => {
	//	it(" calculatex X coordinate of a component given a start and end index of " + start + " and end index of " + end,
	//		function () {
	//			expect(componentPointX(start,end)).toBe(expected);
	//		});
	//});

	//xIndexes = [
	//	{ start: 0, end: 1, expected: 45 },
	//	{ start: 1, end: 0, expected: 45 },
	//	{ start: 7, end: 6, expected: 345 },
	//	{ start: 6, end: 7, expected: 345 }
	//].forEach(({ start, end, expected }) => {
	//	it(" calculatex Y coordinate of a component given a start index of " + start + " and end index of " + end,
	//		function () {
	//			expect(componentPointY(start, end)).toBe(expected);
	//		});
	//});
});

describe("A grid when initialized with invalid values", function () {

	it(" error thrown if difference between points is zero",
		function () {
			expect(function () { init_gridConfig(10, 10, 0, 100, 100); }).toThrow("Size between points not initialized.");
		});

	it(" error thrown if start X is greater than canvas width",
		function () {
			expect(function () { init_gridConfig(200, 10, 20, 100, 100); }).toThrow("Canvas width less than grid start offset.");
		});

	it(" error thrown if start Y is greater than canvas width",
		function () {
			expect(function () { init_gridConfig(10, 200, 20, 100, 100); }).toThrow("Canvas height less than grid start offset.");
		});
});