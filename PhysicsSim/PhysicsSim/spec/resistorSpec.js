describe('Resistor', () => {
    let element;

    beforeEach(function () {
        init_gridConfig(20, 20, 80, 1200, 700);
    });

    it(' should draw a vertical resistor spanning one cell if start is below end', () => {
        var element = new Resistor(new Coordinate(1, 1), new Coordinate(1, 2));
        var shape = element.shape();

        expect(shape.children[0].attrs.x).toBe(94);
        expect(shape.children[0].attrs.y).toBe(120);
        expect(shape.children[0].attrs.width).toBe(12);
        expect(shape.children[0].attrs.height).toBe(40);
        expect(shape.children[1].attrs.points).toEqual([100, 100, 100, 120]);
        expect(shape.children[2].attrs.points).toEqual([100, 160, 100, 180]);

    });

    it(' should be placed vertically spanning one cell if end is below start', () => {
        var element = new Resistor(new Coordinate(0, 1), new Coordinate(0, 0));
        var shape = element.shape();

        expect(shape.children[0].attrs.x).toBe(14);
        expect(shape.children[0].attrs.y).toBe(40);
        expect(shape.children[0].attrs.width).toBe(12);
        expect(shape.children[0].attrs.height).toBe(40);
        expect(shape.children[1].attrs.points).toEqual([20, 20, 20, 40]);
        expect(shape.children[2].attrs.points).toEqual([20, 80, 20, 100]);
    });

    it(' should draw a horizontally resistor spanning one cell if start is left of end', () => {
        var element = new Resistor(new Coordinate(0, 0), new Coordinate(1, 0));
        var shape = element.shape();

        expect(shape.children[0].attrs.x).toBe(40);
        expect(shape.children[0].attrs.y).toBe(14);
        expect(shape.children[0].attrs.width).toBe(40);
        expect(shape.children[0].attrs.height).toBe(12);
        expect(shape.children[1].attrs.points).toEqual([20, 20, 40, 20]);
        expect(shape.children[2].attrs.points).toEqual([80, 20, 100, 20]);

    });

    it(' should be placed horizontally spanning one cell if start is right of end', () => {
        var element = new Resistor(new Coordinate(5, 4), new Coordinate(4, 4));
        console.log(element);
        var shape = element.shape();

        expect(shape.children[0].attrs.x).toBe(360);
        expect(shape.children[0].attrs.y).toBe(334);
        expect(shape.children[0].attrs.width).toBe(40);
        expect(shape.children[0].attrs.height).toBe(12);
        expect(shape.children[1].attrs.points).toEqual([340, 340, 360, 340]);
        expect(shape.children[2].attrs.points).toEqual([400, 340, 420, 340]);
    });

});