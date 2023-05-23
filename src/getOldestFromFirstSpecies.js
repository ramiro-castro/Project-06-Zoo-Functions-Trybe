const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const objEmploye = data.employees.find((employe) => employe.id === id); // por qual motivo vira um array de array se eu colodar array[index]? pq filter cria um array a cada valor id equivalente
  const objFirstAnimal = objEmploye.responsibleFor.find((e) => e);
  const objDadosAnimal = data.species.find((specie) => specie.id === objFirstAnimal);
  const objResidents = objDadosAnimal.residents.map((resident) => resident);
  const velho = objResidents.reduce((prev, current) => (prev.age > current.age ? prev : current)); // https://receitasdecodigo.com.br/front-end/encontrar-maior-ou-menor-valor-de-um-array-javascript#:~:text=Encontrar%20o%20maior%20valor%20de%20um%20array%20de%20objetos%20em%20Javasctipt&text=Considerando%20este%20array%20de%20objetos,%2C%20current)%20%7B%20return%20prev.

  //   console.log(objFirstAnimal);
  //   console.log(objDadosAnimal);
  //   console.log(objResidents);
  //   console.log(velho);
  return Object.values(velho);
}

module.exports = getOldestFromFirstSpecies;
