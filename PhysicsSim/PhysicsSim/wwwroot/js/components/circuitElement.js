class CircuitElement {

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    shape = () => {
        console.log("Shape not defined.")
        return null;
    }

    orientation = () => {
        // Vertical orientation
        if (this.start.x == this.end.x) {
            if (this.start.y > this.end.y) { return Orientation.TopToBottom; }
            else if (this.start.y < this.end.y) { return Orientation.BottomToTop; }
            else { return this.unsupportedOperation(); }
        }
        // Horizontal orientation
        else if (this.start.y == this.end.y) {
            if (this.start.x > this.end.x) { return Orientation.RightToLeft; }
            else if (this.start.x < this.end.x) { return Orientation.LeftToRight; }
            else { return this.unsupportedOperation(); }
        }
        else {
            return this.unsupportedOperation();
        }
    }

    unsupportedOperation = () => {
        console.error("Unsupported orientation");
        return Orientation.Unknown;
    }
}