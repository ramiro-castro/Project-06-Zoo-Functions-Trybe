const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');

const averageAge = ({ residents }) =>// preciso ver uma outra implementacao para comprarar
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    // console.log(typeof averageAge(elephants));
    return averageAge(elephants); // envia para averAge o parameto elephants... tal parameto ja e linkado com sua key residents na funcao average
  default:
    return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  // console.log(Object.keys(elephants).includes('name'));
  if (Object.keys(elephants).includes(param)) { // retorna valores presentes no objeto elephantes como nome, populacao maxima...
    return elephants[param];
  }
  return computeData(param, elephants);
};

// console.log(handlerElephants('averageAge'));

module.exports = handlerElephants;
