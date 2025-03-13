const { somaMultiplos5e7 } = require("./somaMultiplos5e7")
describe('Soma múltiplos 5 e 7', () => {
    it('CT01', () => {
        expect(somaMultiplos5e7(100)).toBe(1580);
    });

    it('CT02', () => {
        expect(somaMultiplos5e7(75)).toBe(805);
    });
});