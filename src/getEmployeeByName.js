const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let obj = {};
  if (employeeName === undefined) {
    return obj;
  }

  obj = data.employees.find((employe) => employe.firstName === employeeName);
  if (obj === undefined) {
    obj = data.employees.find((employe) => employe.lastName === employeeName);
    return obj;
  }

  return obj;
}

// console.log(getEmployeeByName('Elser'));

module.exports = getEmployeeByName;
