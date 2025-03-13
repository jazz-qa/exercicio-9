const { mdc } = require("./mdc")
describe('Mínimo múltiplo comum', () => {
    it('CT01', () => {
        expect(mdc(36,60)).toBe(12);
    });

    it('CT02', () => {
        expect(mdc(42,24)).toBe(6);
    });
});