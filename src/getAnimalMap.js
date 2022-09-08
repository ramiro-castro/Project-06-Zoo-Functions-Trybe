const data = require('../data/zoo_data');

function animalLocation(local) {
  // console.log(idAnimal);
  const array = [];
  const animals = data.species.map((specie) => specie);
  animals.forEach((animal, index) => {
    if (animal.location === local) {
      array.push(animal.name);
    }
  });
  return array;
}

function comparaNomeSex(animal, sexo) {
  const result = [];
  animal.residents.forEach((resident) => {
    if (resident.sex === sexo) {
      result.push(resident.name);
    }
  });
  return result;
}

function animalSex(animal, option) {
  let sexo = 'male';
  let nameSex = [];
  if (option[2] !== undefined || option[4] !== undefined) {
    sexo = 'female';
  }

  nameSex = comparaNomeSex(animal, sexo);

  if (option[4] !== undefined || option[5] !== undefined) {
    return nameSex.sort();
  }
  return nameSex;
}

function animalObject(animal, option) { // sort estara ou nao em option
  const obj = {};
  if (option[1] !== undefined) {
    // console.log('entrei sera organizado em ordem alfabetica');
    obj[animal.name] = (animal.residents.map((resident) => resident.name)).sort();// sera organizado em ordem alfabetica
    // console.log(obj);
    return obj;
  }
  for (let index = 2; index < option.length; index += 1) {
    if (option[index] !== undefined) {
    // console.log('entrei sera organizado em ordem alfabetica');
      obj[animal.name] = animalSex(animal, option);
      console.log(obj);
      return obj;
    }
  }
  obj[animal.name] = animal.residents.map((resident) => resident.name);
  return obj;
}

function animalName(local, option) {
  // console.log(idAnimal);
  const arr = [];
  let auxArr = 0;
  const animals = data.species.map((specie) => specie);
  animals.forEach((animal, index) => {
    if (animal.location === local) { // OBS: tem que ser um array de obj
      arr[auxArr] = animalObject(animal, option);
      auxArr += 1;
    }
  });
  // console.log(arr);
  return arr;
}

function criaObjLocation(op) {
  const objLocation = {};
  const animals = data.species.map((specie) => specie);
  const locationBruto = animals.map((animal) => animal.location);
  const locations = locationBruto.filter((este, index) => locationBruto.indexOf(este) === index); // https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript

  for (let index = 0; index < op.length; index += 1) {
    if (op[index] !== undefined) {
      locations.forEach((location) => { objLocation[location] = animalName(location, op); });
      return objLocation;
    }
  }
  // if (op[0] !== undefined || op[1] !== undefined || op[2] !== undefined || op[3] !== undefined || op[4] !== undefined || op[5] !== undefined) {
  //     locations.forEach((location) => { objLocation[location] = animalName(location, op); });
  //     return objLocation;
  //   }
  console.log('sai do op for');
  locations.forEach((location) => { objLocation[location] = animalLocation(location); });
  return objLocation;
}

function arrOptions(options) {
  const arrOptionsAux = [JSON.stringify(options)];
  console.log(arrOptionsAux);
  let aux = [];
  const option = [arrOptionsAux.find((e) => e === '{"includeNames":true}')]; // verificar se tem incluNames
  aux = arrOptionsAux.find((e) => e === '{"includeNames":true,"sorted":true}'); //
  option.push(aux);
  aux = arrOptionsAux.find((e) => e === '{"includeNames":true,"sex":"female"}'); //
  option.push(aux);
  aux = arrOptionsAux.find((e) => e === '{"includeNames":true,"sex":"male"}'); //
  option.push(aux);
  aux = arrOptionsAux.find((e) => e === '{"includeNames":true,"sex":"female","sorted":true}'); //
  // console.log(aux);
  option.push(aux);
  aux = arrOptionsAux.find((e) => e === '{"includeNames":true,"sex":"male","sorted":true}'); //
  // console.log(aux);
  option.push(aux);
  return option;
}

function getAnimalMap(options) {
  // console.log(options);
  const option = arrOptions(options);
  if (options === undefined) {
    return criaObjLocation(option);
  }

  // console.log(option);
  if (option[0] === undefined && option[1] === undefined) {
    // console.log('acessei');
    return criaObjLocation(option);
  }

  return criaObjLocation(option);
}
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(animalLocation('NE'));
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'male' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
