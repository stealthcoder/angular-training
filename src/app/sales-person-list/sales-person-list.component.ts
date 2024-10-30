import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  // templateUrl: './sales-person-list.component.html',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "jdoe@gmail.com", 40000),
    new SalesPerson("Mike", "Shoe", "mshoedoe@gmail.com", 50000),
    new SalesPerson("Don", "Mino", "dmino@gmail.com", 80000),
    new SalesPerson("Street", "Smart", "ssmart@gmail.com", 100000),
    new SalesPerson("Chris", "Toe", "tcoe@gmail.com", 90000)
  ]
  constructor(){}
  ngOnInit(): void {
    
  }
  
}
