import type { Employee } from './employee.js';

export class EmployeeDirectory {

  private employees: Employee[] = [];
  private nextId: number = 1;

  addEmployee(data : Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = { id: this.nextId++, ...data };
    this.employees.push(newEmployee);
    return newEmployee;

  }

  updateEmployee( id: number, data : Partial<Omit<Employee, 'id'>>): Employee | undefined {
    const employee = this.employees.find((e) => e.id === id);
    if (!employee) return undefined;
    Object.assign(employee, data);
    return employee;
  }

  deleteEmployee(id: number): boolean {
    const index = this.employees.findIndex((e)=> e.id === id);
    if (index === -1) return false;
    this.employees.splice(index, 1);
    return true;
  }

  searchEmployee(query: string): Employee[] {
    const q = query.toLowerCase();
    return this.employees.filter(
      (e) => e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q)
    );
  }

    filterByDepartment(department: string): Employee[] {
    return this.employees.filter(
      (e) => e.department.toLowerCase() === department.toLowerCase()
    );
  }

  listAll(): Employee[] {
    return [...this.employees];
  }

}