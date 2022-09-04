const data = require('../data/zoo_data');

function buscaDiasAnimal(day) {
  const arr = [];

  const animals = data.species.map((specie) => specie.name);
  animals.forEach((animal) => {
    const especie = data.species.find((specie) => specie.name === animal);
    const dia = especie.availability.find((e) => e === day);
    if (dia !== undefined) {
      arr.push(animal);
    }
    // console.log(dia);
  });
  return arr;
}

function criaObjeto() {
  const dias = Object.keys(data.hours);
  const hour = Object.values(data.hours);
  const objDay = {};
  dias.forEach((dia, index) => {
    // console.log(dia);
    if (dia !== 'Monday') {
      objDay[dia] = {
        officeHour: `Open from ${hour[index].open}am until ${hour[index].close}pm`,
        exhibition: buscaDiasAnimal(dia),
      };
    } else {
      objDay[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return objDay;
}

function criaObjDia(diaX) {
  const dias = Object.keys(data.hours);
  const hour = Object.values(data.hours);
  // console.log(hour);
  const objDay = {};
  dias.forEach((dia, index) => {
    // console.log(dia);
    if (dia === diaX) {
      objDay[dia] = {
        officeHour: `Open from ${hour[index].open}am until ${hour[index].close}pm`,
        exhibition: buscaDiasAnimal(dia),
      };
    }
  });
  return objDay;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    const objDay = {};
    objDay[scheduleTarget] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return objDay;
  }
  const animal = data.species.find((specie) => specie.name === scheduleTarget);
  if (animal !== undefined) {
    return animal.availability;
  }
  const dias = Object.keys(data.hours);
  const day = dias.find((dia) => dia === scheduleTarget);
  if (day !== undefined) {
    return criaObjDia(scheduleTarget);
  }
  return criaObjeto(); // para caso nao seja passado qualquer parametro ou ainda nenhum dia ou animal
}
// console.log(getSchedule('Tuesday'));
// console.log(criaObjDia('Tuesday'));
// console.log(buscaDiasAnimal('Tuesday'));
module.exports = getSchedule;
