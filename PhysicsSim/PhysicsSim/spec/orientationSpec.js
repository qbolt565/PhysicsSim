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
});
