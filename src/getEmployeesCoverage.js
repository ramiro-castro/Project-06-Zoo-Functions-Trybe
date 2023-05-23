const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

function animalName(idAnimal) {
  // console.log(idAnimal);
  const animal = data.species.find((specie) => specie.id === idAnimal);
  return animal.name;
}

function animalLocation(idAnimal) {
  // console.log(idAnimal);
  const animal = data.species.find((specie) => specie.id === idAnimal);
  return animal.location;
}

function withName(dado) {
  // console.log('entrei withName');
  const byName = getEmployeeByName(dado);
  const obj = {
    id: byName.id,
    fullName: `${byName.firstName} ${byName.lastName}`,
    species: byName.responsibleFor.map((id) => animalName(id)),
    locations: byName.responsibleFor.map((id) => animalLocation(id)),
  };
  // console.log(byName);
  return obj;
}

function verifica(idRecebido) {
  const dado = Object.values(idRecebido).join('');
  const checkId = data.employees.find((employe) => employe.id === dado);
  const checkName = getEmployeeByName(dado);
  if (checkId === undefined && checkName === undefined) {
    return false;
  }
  return true;
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    // console.log('entrei obj');
    const funcionarios = data.employees.map((employe) => withName(employe.firstName));
    return funcionarios;
  }
  const dado = Object.values(obj).join('');
  if (verifica(dado) === false) {
    throw new Error('Informações inválidas'); // essa funcao gera erro no test automatizado caso algum console.log esteja descomentado
  }

  const checkId = data.employees.find((employe) => employe.id === dado);
  const checkName = getEmployeeByName(dado);
  if (checkName !== undefined) {
    return withName(dado);
  }

  return withName(checkId.firstName);
}

// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
module.exports = getEmployeesCoverage;
