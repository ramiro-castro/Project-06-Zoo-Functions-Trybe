const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const objSpecies = {};
    data.species.forEach((specie) => {
      // https://pt.stackoverflow.com/questions/64116/%C3%89-poss%C3%ADvel-criar-um-objeto-dinamicamente-em-js-sem-utilizar-eval
      objSpecies[specie.name] = specie.residents.length;
    });
    return objSpecies;
  }
  const animalData = Object.values(animal);
  if (animalData.length === 1) {
    const specieSearch = data.species.find((specie) => specie.name === animalData[0]);
    return specieSearch.residents.length;
  }
  const specieSearch = data.species.find((specie) => specie.name === animalData[0]);
  const sex = specieSearch.residents.filter((resident) => resident.sex === animalData[1]);
  return sex.length;
}
// console.log(countAnimals({ specie: 'bears', sex: 'male' }));
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
// const specieName = data.species.map((specie) => specie.name);
// const speciePop = data.species.map((specie) => specie.popularity);
