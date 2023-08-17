class Connector extends CircuitElement{

    constructor(start, end) {
        super(start, end);
    }

    shape = () => {
        return new Konva.Line({
            points: [this.start.pxX(), this.start.pxY(), this.end.pxX(), this.end.pxY()],
            stroke: 'blue',
            strokeWidth: 3,
            lineCap: 'round',
            lineJoin: 'round',
        });
    }
}