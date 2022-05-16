import {Component, OnInit} from '@angular/core';
import {GetapiService} from "../../api/getapi.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'home'
  dataArray: any

  constructor() {
  }

  ngOnInit(): void {

  }





}
