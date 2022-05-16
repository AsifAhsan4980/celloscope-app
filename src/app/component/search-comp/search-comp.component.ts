import {Component, OnInit, ViewChild} from '@angular/core';
import {GetapiService} from "../../api/getapi.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css']
})
export class SearchCompComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined
  dataArray : any =[]
  constructor(private info: GetapiService) { }

  ngOnInit(): void {
  }

  getData($event: any) {
    this.dataArray = $event
  }
}
