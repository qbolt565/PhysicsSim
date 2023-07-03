class CircuitElement {

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    shape = () => {
        console.log("Shape not defined.")
        return null;
    }
}