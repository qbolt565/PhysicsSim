// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



function main() {

	var canvasWidth = 1200;
	var canvasHeight = 700;

	init_gridConfig(20, 20, 80, canvasWidth, canvasHeight);

	// first we need to create a stage
	var stage = new Konva.Stage({
		container: 'CanvasContainer', // id of container <div>
		width: canvasWidth,
		height: canvasHeight
	});

	var componentList = [
	{
		image:
			new Konva.Circle({
				x: 0,
				y: 0,
				radius: 3,
				fill: 'Red'
			}),
		startX: 1,
		startY: 2,
		endX: 2,
		endY: 2
	},
	{
		image:
			new Konva.Circle({
				x: 0,
				y: 0,
				radius: 3,
				fill: 'Blue'
			}),
		startX: 1,
		startY: 2,
		endX: 1,
		endY: 3
	}];

	addGridAndBackground(canvasHeight, canvasWidth, stage);
	drawComponents(componentList, stage)
}

function addGridAndBackground(canvasHeight, canvasWidth, stage) {
	var gridPointRadius = 3;

	var backgroundLayer = new Konva.Layer();
	var backgroundRect = new Konva.Rect({
		x: 0,
		y: 0,
		width: canvasWidth,
		height: canvasHeight,
		fill: 'GhostWhite'
	});
	backgroundLayer.add(backgroundRect);

	var gridLayer = new Konva.Layer();


	for (let i = 0; i <= xAxisGridPoints(); i++) {
		for (let j = 0; j <= yAxisGridPoints(); j++) {
			gridLayer.add(new Konva.Circle({
				x: gridPointX(i),
				y: gridPointY(j),
				radius: gridPointRadius,
				fill: 'Gainsboro'
			}));
		}
	}


	// add the layer to the stage
	stage.add(backgroundLayer);
	stage.add(gridLayer);

	// draw the image
	backgroundLayer.draw();
}

function drawComponents(components, stage) {
	var componentLayer = new Konva.Layer();

	for (let i = 0; i < components.length; i++) {
		component = components[i];
		component.image.x(componentPointX(component.startX, component.endX));
		component.image.y(componentPointY(component.startY, component.endY));
		componentLayer.add(component.image);
	}

	stage.add(componentLayer);
	componentLayer.draw();
}


window.onload = main;

class Animals {
	constructor(name, specie) {
		this.name = name;
		this.specie = specie;
	}
	sing() {
		return `${this.name} can sing`;
	}
	dance() {
		return `${this.name} can dance`;
	}
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo.sing());