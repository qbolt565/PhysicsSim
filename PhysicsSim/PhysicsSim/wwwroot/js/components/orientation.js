class Orientation {
    static TopToBottom = new Orientation('TopToBottom');
    static BottomToTop = new Orientation('BottomToTop');
    static LeftToRight = new Orientation('LeftToRight');
    static RightToLeft = new Orientation('RightToLeft');
    static Unkown = new Orientation('Unkown');

    constructor(name) {
        this.name = name;
    }
    toString() {
        return `Color.${this.name}`;
    }
}