import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  Emp: any[] = [
    {
      id: 101,
      name: 'Shariq Najam',
      age: 26,
      desig: 'Secretary',
      salary: 110000,
    },
    {
      id: 102,
      name: 'Syed Ali',
      age: 21,
      desig: 'Accountant',
      salary: 85000,
    },
    {
      id: 103,
      name: 'Hamza Sawati',
      age: 22,
      desig: 'Sr. Clerk',
      salary: 95000,
    },
    {
      id: 104,
      name: 'Hafiz Abdullah',
      age: 24,
      desig: 'Jr. Clerk',
      salary: 70000,
    },
    {
      id: 105,
      name: 'Hamza Khan',
      age: 25,
      desig: 'Jr. Clerk',
      salary: 70000,
    },
    {
      id: 106,
      name: 'Bilal Ahmed',
      age: 26,
      desig: 'Computer Operator',
      salary: 65000,
    },
    {
      id: 107,
      name: 'Noman Bhatti',
      age: 28,
      desig: 'Chowkidar',
      salary: 35000,
    },
    {
      id: 108,
      name: 'Asghar Ali',
      age: 19,
      desig: 'Naib Qasid',
      salary: 35000,
    },
    {
      id: 109,
      name: 'Abdul Qadir',
      age: 31,
      desig: 'Malhi',
      salary: 35000,
    },
    {
      id: 110,
      name: 'Muhammad Umer',
      age: 35,
      desig: 'Jr. Accountant',
      salary: 55000,
    }
  ];
}
