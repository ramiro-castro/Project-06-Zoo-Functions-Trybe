const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countIdades = {};
  let contChild = 0;
  let contAdult = 0;
  let contSenior = 0;
  entrants.forEach((e) => {
    // https://pt.stackoverflow.com/questions/64116/%C3%89-poss%C3%ADvel-criar-um-objeto-dinamicamente-em-js-sem-utilizar-eval
    if (e.age < 18) {
      contChild += 1;
      countIdades.child = contChild;
    } else if (e.age >= 18 && e.age < 50) {
      contAdult += 1;
      countIdades.adult = contAdult;
    } else {
      contSenior += 1;
      countIdades.senior = contSenior;
    }
  });
  return countIdades;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.values(entrants).length === 0) {
    return 0;
  }
  const arrIdades = Object.values(countEntrants(entrants));
  const arrFaixa = Object.keys(countEntrants(entrants));
  let price = 0;
  arrIdades.forEach((idade, index) => {
    price += idade * data.prices[arrFaixa[index]];
  });

  return price;
}
// const pessoas = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// const adult = [{ name: 'Boriel', age: 18 }];
// console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
