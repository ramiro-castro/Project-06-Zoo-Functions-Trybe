const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const obj = data.species.find((specie) => specie.name === animal); // por qual motivo vira um array de array se eu colodar array[index]? pq filter cria um array a cada valor id equivalente
  // console.log(obj);
  const maisVelho = obj.residents.filter((resident) => resident.age > age);
  // console.log(maisVelho);
  // console.log(obj.residents.length);
  if (maisVelho.length !== obj.residents.length) {
    return false; // se pelo menos um animal estiver menor ou maior que a idade passada em age
  }
  return true; // se todos os animais estiverem menores ou maiores que a idade passada em age
}
// console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
