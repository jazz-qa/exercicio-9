const { indicesMaiorMenor } = require("./2")
describe('Índices maior e menor', () => {
    it('CT01', () => {
        const numeros = [20, 12, 44, 6, 16];
        expect(indicesMaiorMenor(numeros)).toStrictEqual({ "indiceMaior": 2, "indiceMenor": 3 });
    });

    it('CT02', () => {
        const numeros = [46, 12, 90, 64, 8];
        expect(indicesMaiorMenor(numeros)).toStrictEqual({ "indiceMaior": 2, "indiceMenor": 4 });
    });
});