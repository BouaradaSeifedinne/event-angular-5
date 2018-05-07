import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ProfileService } from '../../../providers/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  user: any = [];

  constructor(private route:Router, private profile:ProfileService, public toastr: ToastsManager, vcr: ViewContainerRef) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile () {
    this.profile.proFile().subscribe(res => {
      this.user = res['user'];
    },
    err => {
      //console.log(err);
      this.route.navigate(['/']);
      this.toastr.error(err.error.message, 'Oops!');
    });
  }

}
