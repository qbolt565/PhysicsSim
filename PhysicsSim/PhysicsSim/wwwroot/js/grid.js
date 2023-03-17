var gridConfig;

function init_gridConfig(startX, startY, pointDiff, canvasWidth, canvasHeight) {
	gridConfig = new GridConfig(startX, startY, pointDiff, canvasWidth, canvasHeight);
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

class Coordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	pxX() {
		if (this.x > gridConfig.xAxisGridPoints)
			throw "Grid point X index out of bounds";

		return gridConfig.gridStartX + (this.x * gridConfig.pointDiff);
	}

	pxY() {
		if (this.y > gridConfig.yAxisGridPoints)
			throw "Grid point Y index out of bounds";

		return gridConfig.gridStartY + (this.y * gridConfig.pointDiff);
	}
}

class GridConfig {

	constructor(startX, startY, pointDiff, canvasWidth, canvasHeight) {
		if (canvasWidth < startX)
			throw "Canvas width less than grid start offset.";
		if (canvasHeight < startY)
			throw "Canvas height less than grid start offset.";
		if (pointDiff == 0)
			throw "Size between points not initialized.";

		this.gridStartX = startX;
		this.gridStartY = startY;
		this.pointDiff = pointDiff;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.xAxisGridPoints = Math.floor((canvasWidth - startX) / pointDiff);
		this.yAxisGridPoints = Math.floor((canvasHeight - startY) / pointDiff);
	}
}


