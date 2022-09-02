const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const array = [];

  // console.log(ids);
  // console.log(typeof ids);

  if (typeof ids === 'object') {
    // console.log('entrei if');
    ids.forEach((idSpecie, index) => {
      console.log(`${index} = ${idSpecie}`);
      array[index] = data.species.find((specie) => specie.id === idSpecie); // por qual motivo vira um array de array se eu colodar array[index]? pq filter cria um array a cada valor id equivalente
    });
    return array;
  }
//    array = data.species.filter((specie) => specie.id === ids);
//    return array;
}
// const actual = getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// );
// const idSpecies = ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']
//  const actual = getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

// console.log(actual);

module.exports = getSpeciesByIds;
