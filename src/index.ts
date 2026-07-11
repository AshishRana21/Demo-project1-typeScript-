import { EmployeeDirectory } from "./directory.js";

const directory = new EmployeeDirectory();

// Add some employees
directory.addEmployee({ name: "Asha Patel", department: "Engineering", role: "Developer", email: "asha@company.com" });
directory.addEmployee({ name: "Rahul Mehta", department: "Sales", role: "Manager", email: "rahul@company.com" });
directory.addEmployee({ name: "Priya Singh", department: "Engineering", role: "Lead", email: "priya@company.com" });

console.log("All employees:");
console.log(directory.listAll());

console.log("\nSearch for 'asha':");
console.log(directory.searchEmployee("asha"));

console.log("\nFilter by Engineering:");
console.log(directory.filterByDepartment("Engineering"));

console.log("\nUpdate employee 2:");
console.log(directory.updateEmployee(2, { role: "Senior Manager" }));

console.log("\nDelete employee 3:");
console.log(directory.deleteEmployee(3));

console.log("\nFinal list:");
console.log(directory.listAll());