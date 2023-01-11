var gridConfig = { gridStartX: 0, gridStartY: 0, pointDiff: 0, canvasWidth: 0, canvasHeight: 0};

function init_gridConfig(startX, startY, pointDiff, canvasWidth, canvasHeight) {
	gridConfig.gridStartX = startX;
	gridConfig.gridStartY = startY;
	gridConfig.pointDiff = pointDiff;
	gridConfig.canvasWidth = canvasWidth;
	gridConfig.canvasHeight = canvasHeight;
}

function xAxisGridPoints() {
	return axisGridPoints(gridConfig.canvasWidth, gridConfig.gridStartX, "width");
}

function yAxisGridPoints() {
	return axisGridPoints(gridConfig.canvasHeight, gridConfig.gridStartY, "height");
}

function axisGridPoints(length, startOffset, dimension) {
	if (length < startOffset)
		throw "Canvas " + dimension + " less than grid start offset";

	if (gridConfig.pointDiff == 0)
		throw "Size between points not initialized";

	return Math.floor((length - startOffset) / gridConfig.pointDiff);
}

function gridPointX(index) {
	if (index > xAxisGridPoints())
		throw "Grid point X index out of bounds";

	return gridPoint(index, gridConfig.gridStartX);
}

function gridPointY(index) {
	if (index > yAxisGridPoints())
		throw "Grid point Y index out of bounds";

	return gridPoint(index, gridConfig.gridStartY);
}

//function gridPoint(index, offset) {
//	return offset + (index * gridConfig.pointDiff);
//}
function gridPoint(coordinate)
{
	if (coordinate.x > xAxisGridPoints())
		throw "Grid point X index out of bounds";

	if (coordinate.y > yAxisGridPoints())
		throw "Grid point Y index out of bounds";

	return new PixelCoordinate(gridConfig.gridStartX + (coordinate.x * gridConfig.pointDiff), gridConfig.gridStartY + (coordinate.y * gridConfig.pointDiff));
}

function componentPointX(start, end) {
	if (start > xAxisGridPoints() || end > xAxisGridPoints())
		throw "Component point X index out of bounds";

	return componentPoint(start, end, gridConfig.gridStartX);
}

function componentPointY(start, end) {
	if (start > yAxisGridPoints() || end > yAxisGridPoints())
		throw "Component point Y index out of bounds";

	return componentPoint(start, end, gridConfig.gridStartY);
}


//  We want X and Y set together.  X or Y should be the same and the opposite should have a max diff of 1

function componentPoint(start, end, offset) {
	//if (Math.abs(start - end) != 1)
	//	throw "Start and end and can only be sperated by 1 position";

	min = start < end ? start : end;

	return offset +
		(min * gridConfig.pointDiff) +
		gridConfig.pointDiff / 2;
}

class PixelCoordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}


class GridCoordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);