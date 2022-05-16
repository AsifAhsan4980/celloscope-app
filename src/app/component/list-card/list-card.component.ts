import { Component, OnInit } from '@angular/core';
import {GetapiService} from "../../api/getapi.service";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  dataArray: any
  constructor(private info: GetapiService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData = () => {
    this.info.getInfo('').subscribe(
      (res: any) => {
        console.log(res.items)

        this.dataArray = res.items;
      },
      (err: any) => {
        // this.notifyService.showError(err, 'Error in database');
      },
    )
  }
}
