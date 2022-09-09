const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna um objeto com todos os dias caso nao tenha sido passado um parametro', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  const open = 'The zoo is open';
  const closed = 'The zoo is closed';

  it('retorna aviso caso nao tenha sido passado como parametro os argumentos Thursday e 12:30-PM', () => {
    const actual = getOpeningHours('Thursday', '12:30-PM');
    const expected = open;
    expect(actual).toEqual(expected);
  });

  it('retorna aviso caso nao tenha sido passado como parametro os argumentos Saturday e 12:00-AM', () => {
    const actual = getOpeningHours('SaTurday', '12:00-AM');
    const expected = closed;
    expect(actual).toEqual(expected);
  });

  it('retorna aviso caso nao tenha sido passado como parametro os argumentos Sunday e 07:00-PM', () => {
    const actual = getOpeningHours('Sunday', '07:00-PM');
    const expected = open;
    expect(actual).toEqual(expected);
  });

  it('retorna aviso caso nao tenha sido passado como parametro os argumentos Monday e 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = closed;
    expect(actual).toEqual(expected);
  });

  it('verifica se é função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos Thu e 09:00-AM', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos Friday e 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos Sunday e 18:00-AM', () => {
    expect(() => getOpeningHours('Sunday', '18:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos Sunday e 9:60-AM', () => {
    expect(() => getOpeningHours('Sunday', '9:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });

  it('retorna exceção caso nao tenha sido passado como parametro os argumentos SaTurday e 9:60-AM', () => {
    expect(() => getOpeningHours('SaTurday', '9:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
