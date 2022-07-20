// Write your solution in this file!
const employee = {
    name: "Jolly" ,
    streetAddress: "000 Cat House Ave South Meowfield NJ 00000"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee };
    updatedEmployee[key] = value;
    return updatedEmployee
    };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = {...employee };

    delete deleteEmployee[key];

    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];

    return employee;
}