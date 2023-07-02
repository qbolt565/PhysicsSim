class Connector {

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    shape = () => {
        return new Konva.Line({
            points: [this.start.pxX(), this.start.pxY(), this.end.pxX(), this.end.pxY()],
            stroke: 'blue',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round',
        });
    }
}