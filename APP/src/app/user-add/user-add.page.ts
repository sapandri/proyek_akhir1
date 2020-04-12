import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {
 
  user: any = {}
  constructor(
    private userService: UserService,
    private modalCtrl: ModalController,
    private utils: UtilsService
  ) { }

  ngOnInit() {
  }

  submit() {
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
      this.utils.showToast('Berhasil ditambahkan');
      this.modalCtrl.dismiss();
    }, (err) => {
      console.log(JSON.stringify(err));
      this.utils.showToast('Terjadi kesalahan');
    });
  }
  closePage() {
    this.modalCtrl.dismiss();
  }

}
