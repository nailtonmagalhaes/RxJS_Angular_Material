import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DATA_MOVIES } from './model/data-movies';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit {
  public dataSource = new MatTableDataSource(DATA_MOVIES);
  public displayedNameColumns = ['name', 'category', 'rating', 'year', 'director'];
  public filterValue = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event){
    //this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  clearFilter(){
    this.filterValue = '';
    this.dataSource.filter = this.filterValue;
  }
}

