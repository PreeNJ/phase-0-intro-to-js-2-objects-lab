
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
   
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
   
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
 
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log("Original Employee:", employee);
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log("Updated Employee (Non-Destructive):", updatedEmployee);
  console.log("Original Employee after non-destructive update:", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Director");
  console.log("Updated Employee (Destructive):", employee);
  
  let employeeAfterDeletion = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after non-destructive deletion:", employeeAfterDeletion);
  console.log("Original Employee after non-destructive deletion:", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after destructive deletion:", employee);
  