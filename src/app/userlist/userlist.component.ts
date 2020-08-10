import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private _service:NgserviceService) { }

  ngOnInit(): void {
              this._service.fetchUserListFromRemote().subscribe(
                    data=> console.log("Response received "),
                    error=> console.log("Error received "),

                    )
  }


}
