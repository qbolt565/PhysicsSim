describe('CircuitElement', () => {
    let element;

    beforeEach(() => {
        element = new CircuitElement({ x: 0, y: 0 }, { x: 0, y: 1 });
    });

    it('should have start and end properties', () => {
        expect(element.start).toEqual({ x: 0, y: 0 });
        expect(element.end).toEqual({ x: 0, y: 1 });
    });

    describe('shape', () => {
        it('should return null and log a message', () => {
            spyOn(console, 'log');
            expect(element.shape()).toBeNull();
            expect(console.log).toHaveBeenCalledWith('Shape not defined.');
        });
    });

    describe('orientation', () => {
        it('should return TopToBottom when start is above end', () => {
            element.start = { x: 0, y: 1 };
            element.end = { x: 0, y: 0 };
            expect(element.orientation()).toBe(Orientation.TopToBottom);
        });

        it('should return BottomToTop when start is below end', () => {
            expect(element.orientation()).toBe(Orientation.BottomToTop);
        });

        it('should return LeftToRight when start is to the left of end', () => {
            element.start = { x: 0, y: 0 };
            element.end = { x: 1, y: 0 };
            expect(element.orientation()).toBe(Orientation.LeftToRight);
        });

        it('should return RightToLeft when start is to the right of end', () => {
            element.start = { x: 1, y: 0 };
            element.end = { x: 0, y: 0 };
            expect(element.orientation()).toBe(Orientation.RightToLeft);
        });

        it('should return Unknown for unsupported orientations', () => {
            element.start = { x: 0, y: 0 };
            element.end = { x: 1, y: 1 };
            expect(element.orientation()).toBe(Orientation.Unknown);
        });
    });
});