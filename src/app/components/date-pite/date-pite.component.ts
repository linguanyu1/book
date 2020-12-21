import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-date-pite',
  templateUrl: './date-pite.component.html',
  styleUrls: ['./date-pite.component.css']
})
export class DatePiteComponent implements OnInit {
  constructor(private storage:StorageService) { }
  brithday = new Date(1998,0,17)
  ngOnInit(): void {

  }
  getService(){
    this.storage.test();
  }

}
