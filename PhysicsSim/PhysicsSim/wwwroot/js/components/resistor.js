class Resistor extends CircuitElement {

    constructor(start, end) {
        super(start, end);
    }

    shape = () => {
        const orientation = this.orientation();
        const pointDiff = gridConfig.pointDiff;
        const widthFactor = 0.15;
        const lengthFactor = 0.5;

        let x = 0;
        let y = 0;
        let horizontalBlockSize = pointDiff * widthFactor;
        let verticalBlockSize = pointDiff * lengthFactor;
        let line1Points = [];
        let line2Points = [];

        if (orientation.isVertical()) {
            const topY = Math.min(this.start.pxY(), this.end.pxY());
            x = this.start.pxX() - horizontalBlockSize / 2;
            y = topY + (pointDiff - verticalBlockSize) / 2;

            line1Points = [this.start.pxX(), topY, this.start.pxX(), topY + (pointDiff - verticalBlockSize) / 2];
            line2Points = [this.start.pxX(), topY + verticalBlockSize + (pointDiff - verticalBlockSize) / 2, this.start.pxX(), topY + pointDiff];
        }

        if (orientation.isHorizontal()) {
            horizontalBlockSize = pointDiff * lengthFactor;
            verticalBlockSize = pointDiff * widthFactor;

            const leftX = Math.min(this.start.pxX(), this.end.pxX());
            x = leftX + (pointDiff - horizontalBlockSize) / 2;
            y = this.start.pxY() - verticalBlockSize / 2;

            line1Points = [leftX, this.start.pxY(), leftX + (pointDiff - horizontalBlockSize) / 2, this.start.pxY()];
            line2Points = [leftX + pointDiff - (pointDiff - horizontalBlockSize) / 2, this.start.pxY(), leftX + pointDiff, this.start.pxY()];
        }

        const rectangle = new Konva.Rect({
            x: x,
            y: y,
            width: horizontalBlockSize,
            height: verticalBlockSize,
            fill: 'blue'
        });

        const line1 = new Konva.Line({
            points: line1Points,
            stroke: 'blue',
            strokeWidth: 3,
            lineCap: 'round',
            lineJoin: 'round',
        });

        const line2 = new Konva.Line({
            points: line2Points,
            stroke: 'blue',
            strokeWidth: 3,
            lineCap: 'round',
            lineJoin: 'round',
        });

        const resistorGroup = new Konva.Group();
        resistorGroup.add(rectangle);
        resistorGroup.add(line1);
        resistorGroup.add(line2);

        return resistorGroup;
    }
}