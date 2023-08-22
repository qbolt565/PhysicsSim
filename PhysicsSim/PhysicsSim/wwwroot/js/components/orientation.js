class Orientation {
    static TopToBottom = new Orientation('TopToBottom');
    static BottomToTop = new Orientation('BottomToTop');
    static LeftToRight = new Orientation('LeftToRight');
    static RightToLeft = new Orientation('RightToLeft');
    static Unknown = new Orientation('Unknown');

    constructor(name) {
        this.name = name;
    }

    toString() {
        return `Color.${this.name}`;
    }

    value() {
        var val = 0;
        switch (this.name) {
            case 'BottomToTop':
                val = 0;
                break;
            case 'LeftToRight':
                val = 90;
                break;
            case 'TopToBottom':
                val = 180;
                break;
            case 'RightToLeft':
                val = 270;
                break;
            default:
                val = 0;
        }
        return val;
    }

    isVertical() {
        return this == Orientation.BottomToTop || this == Orientation.TopToBottom;
    }

    isHorizontal() {
        return this == Orientation.LeftToRight || this == Orientation.RightToLeft;
    }

}