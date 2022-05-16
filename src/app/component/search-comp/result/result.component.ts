import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined
  @Input() public dataArray: any = []
  public pageSlice : any
  constructor() {
  }
  message : any;

  ngOnChanges() : void {

    if (this.dataArray[0] === 'data reset') {
      this.message = this.dataArray[0]
    }
    this.pageSlice =  this.dataArray.slice(0, 9)
  }

  ngOnInit(): void {
    // this.dataArray.paginator = this.paginator
  }

  abc() {
    console.log(this.pageSlice)
  }

  onPageChangeEvent(event: PageEvent) {
    console.log('sx',event)
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.dataArray.length) {
      endIndex = this.dataArray.length
    }
    this.pageSlice = this.dataArray.slice(startIndex, endIndex)
  }
}
