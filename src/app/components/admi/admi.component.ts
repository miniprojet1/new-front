import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from '../../shared_service/notification.service';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {
  private  num :any = 0;
  private Notification : any[];
  constructor(private _rotuer:Router, private _notificationService: NotificationService) {
    let x  = this._notificationService;

    setInterval(()=>{

      x.findBySeen(0).subscribe(  (data)=>{
        this.Notification = data;
        this.num = data.length;
      });
    }, 1000);

    if(!localStorage.getItem("user")){
      this._rotuer.navigate(['../login']);

    }
    else {
      let user = JSON.parse(localStorage.getItem("user"));
      if(user.role !== "admin"){
        this._rotuer.navigate(['../liste']);
      }
    }



  }
  deconnexion(){
    localStorage.clear();
    this._rotuer.navigate(['../login']);


  }


  updateseen(){
    this._notificationService.updateNotification(this.Notification).subscribe((data)=> {
      this.num = 0;
    });
  }
  ngOnInit() {
  }

}
