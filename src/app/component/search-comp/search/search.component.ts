import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {GetapiService} from "../../../api/getapi.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // searchKey : string  = 'foo'
  @Output() key = new EventEmitter();
  private dataArray: any;
  constructor(private info: GetapiService) { }
message : any
  ngOnInit(): void {
  }
  searchKey: any;
  searchData = () => {
    if (this.searchKey){
      this.message = undefined
      this.info.getInfo(this.searchKey).subscribe(
        (res: any) => {
          console.log(res.items)
          this.key.emit(res.items);
        },
        (err: any) => {
          // this.notifyService.showError(err, 'Error in database');
        },
      )
    }
    else {
      this.message = "please type something to search"
      // this.key.emit([]);
    }


  }


  resetData() {
    this.key.emit(['data reset']);
  }
}
