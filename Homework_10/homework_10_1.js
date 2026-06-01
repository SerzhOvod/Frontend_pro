let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 },
  ],
  development: {
    web: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1000 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

function CompanySalaryCalculator(companyDom) {
  this.companyDom = companyDom;

  this.companySalary = function (department = this.companyDom) {
    if (Array.isArray(department)) {
      let salarySum = 0;
      for (let i = 0; i < department.length; i++) {
        let worker = department[i];
        if (worker.salary) {
          salarySum += worker.salary;
        }
      }
      return salarySum;
    }

    if (typeof department === 'object') {
      let salarySum = 0;

      for (let nestedDepartment of Object.values(department)) {
        salarySum += this.companySalary(nestedDepartment);
      }
      return salarySum;
    }
  };
}

const newCompany = new CompanySalaryCalculator(company);
console.log(newCompany.companySalary());
