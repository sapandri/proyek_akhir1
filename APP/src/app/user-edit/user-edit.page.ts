import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  user: any = {};
  userId = ''; 
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private utils: UtilsService
  ) { 
    this.getData();
   }

  ngOnInit() {
  }

  getData() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId).subscribe((response) => {
    this.user = response;
  });
  }

  update() {
    this.userService.updateUser(
    this.userId, this.user).subscribe((response) => {
      console.log(response);
      this.utils.showToast('Berhasil dirubah');
      this.router.navigate(['/user-detail/' + this.userId]);
    }, (err) => {
      console.log(JSON.stringify(err));
      this.utils.showToast('Terjadi kesalahan');
    });
  }

}
