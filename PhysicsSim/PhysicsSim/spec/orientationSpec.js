describe('Orientation', () => {
    it('should have the correct names', () => {
        expect(Orientation.TopToBottom.name).toBe('TopToBottom');
        expect(Orientation.BottomToTop.name).toBe('BottomToTop');
        expect(Orientation.LeftToRight.name).toBe('LeftToRight');
        expect(Orientation.RightToLeft.name).toBe('RightToLeft');
        expect(Orientation.Unknown.name).toBe('Unknown');
    });

    it('should have the correct toString representation', () => {
        expect(Orientation.TopToBottom.toString()).toBe('Color.TopToBottom');
        expect(Orientation.BottomToTop.toString()).toBe('Color.BottomToTop');
        expect(Orientation.LeftToRight.toString()).toBe('Color.LeftToRight');
        expect(Orientation.RightToLeft.toString()).toBe('Color.RightToLeft');
        expect(Orientation.Unknown.toString()).toBe('Color.Unknown');
    });

    it('should have the correct numerical value respresentation', () => {
        expect(Orientation.TopToBottom.value()).toBe(180);
        expect(Orientation.BottomToTop.value()).toBe(0);
        expect(Orientation.LeftToRight.value()).toBe(90);
        expect(Orientation.RightToLeft.value()).toBe(270);
        expect(Orientation.Unknown.value()).toBe(0);
    });

    it('should be vertical if top to bottom or bottom to top', () => {
        expect(Orientation.TopToBottom.isVertical()).toBe(true);
        expect(Orientation.BottomToTop.isVertical()).toBe(true);
        expect(Orientation.LeftToRight.isVertical()).toBe(false);
        expect(Orientation.RightToLeft.isVertical()).toBe(false);
        expect(Orientation.Unknown.isVertical()).toBe(false);
    });

    it('should be horizontal if right to left or left to right', () => {
        expect(Orientation.TopToBottom.isHorizontal()).toBe(false);
        expect(Orientation.BottomToTop.isHorizontal()).toBe(false);
        expect(Orientation.LeftToRight.isHorizontal()).toBe(true);
        expect(Orientation.RightToLeft.isHorizontal()).toBe(true);
        expect(Orientation.Unknown.isHorizontal()).toBe(false);
    });
});
