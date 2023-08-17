class Resistor extends CircuitElement {

    constructor(start, end) {
        super(start, end);
    }

    shape = () => {

        var x = 0;
        var y = 0;

        var lengthFactor = 0.5;
        var widthFactor = 0.15;
        var pointDiff = gridConfig.pointDiff;

        var horizontalBlockSize = pointDiff * widthFactor;
        var verticalBlockSize = pointDiff * lengthFactor;

        var line1Points = [];
        var line2Points = [];
        

        if (this.orientation().isVertical()) {
            var topY = (this.start.pxY() < this.end.pxY() ? this.start.pxY() : this.end.pxY());

            x = this.start.pxX() - horizontalBlockSize / 2;
            y = topY + (pointDiff - verticalBlockSize) / 2;

            line1Points = [this.start.pxX(), topY, this.start.pxX(), topY + (pointDiff - verticalBlockSize) / 2];
            line2Points = [this.start.pxX(), topY + verticalBlockSize + (pointDiff - verticalBlockSize) / 2, this.start.pxX(), topY + pointDiff];
        }


        if (this.orientation().isHorizontal()) {
            horizontalBlockSize = pointDiff * lengthFactor;
            verticalBlockSize = pointDiff * widthFactor;

            var leftX = (this.start.pxX() < this.end.pxX() ? this.start.pxX() : this.end.pxX());

            x = leftX + (pointDiff - horizontalBlockSize) / 2; 
            y = this.start.pxY() - verticalBlockSize / 2;

            line1Points = [leftX, this.start.pxY(), leftX + (pointDiff - horizontalBlockSize) / 2, this.start.pxY()];
            line2Points = [leftX + pointDiff - (pointDiff - horizontalBlockSize) / 2, this.start.pxY(), leftX + pointDiff , this.start.pxY()];
        }

        var rectangle = new Konva.Rect({
            x: x,
            y: y,
            width: horizontalBlockSize,
            height: verticalBlockSize,
            fill: 'blue'
        });

        var line1 = new Konva.Line({
            points: line1Points,
            stroke: 'blue',
            strokeWidth: 3,
            lineCap: 'round',
            lineJoin: 'round',
        });

        var line2 = new Konva.Line({
            points: line2Points,
            stroke: 'blue',
            strokeWidth: 3,
            lineCap: 'round',
            lineJoin: 'round',
        });

        var resistorGroup = new Konva.Group();
        resistorGroup.add(rectangle);
        resistorGroup.add(line1);
        resistorGroup.add(line2);

        return resistorGroup;
    }
}