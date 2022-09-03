const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // console.log(id);
  const managers = data.employees.map((employe) => employe.managers);
  // console.log(managers);
  // data.employees.forEach((employe) => managerCheck.push(employe.managers));
  const managerCheck = managers.find((grupo) => grupo.find((manager) => manager === id)); // retorna o array com id encontrado como gerente
  // console.log(managerCheck);
  // if()
  if (managerCheck !== undefined) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerOf = [];
  data.employees.forEach((employe) => {
    employe.managers.forEach((manager) => {
      if (manager === managerId) {
        managerOf.push(`${employe.firstName} ${employe.lastName}`);
      }
    });
  });
  // console.log(managerOf);
  return managerOf;
}

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// console.log(`ID: ${getRelatedEmployees(stephanieId)}`);
// console.log(`ID: ${isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad')}`);
module.exports = { isManager, getRelatedEmployees };
// codigo que busca pessoas geridas usando for
// const managerOf = [];
// for (let index = 0; index < data.employees.length; index += 1) {
//   const nGeridos = data.employees[index].managers.length;
//   for (let index2 = 0; index2 < nGeridos; index2 += 1) {
//     if (data.employees[index].managers[index2] === managerId) {
//     // console.log(`manager da ${data.employees[index].firstName}: ${data.employees[index].managers[index2]}`);
//       managerOf.push(`${data.employees[index].firstName} ${data.employees[index].lastName}`);
//     }
//   }
// }
