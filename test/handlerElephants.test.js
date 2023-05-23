const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elephants', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('retorna algum valor do objeto elephants', () => {
    {
      const actual = handlerElephants('name');
      const expected = 'elephants';
      expect(actual).toBe(expected);
    }

    {
      const actual = handlerElephants('education');
      const expected = null;
      expect(actual).toBe(expected);
    }
  });
  it('retorna os nomes dos elephants', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('retorna a media de idade (average) dos elephants', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('retorna undefined caso nao tenha sido passado um parametro', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });

  it('retorna aviso caso nao tenha sido passado um parametro do tipo string', () => {
    const actual = handlerElephants(1993);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
});
