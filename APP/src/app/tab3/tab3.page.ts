import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { UserAddPage } from '../user-add/user-add.page';
import { UtilsService } from '../services/utils.service';

 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  users: any = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private utils: UtilsService) {}

    getData() {
      this.userService.getAllUsers().subscribe(
        (response) => {
          console.log(response);
          this.users = response;
        },
        (err) => {
          this.users = [];
          console.log(JSON.stringify(err));
          this.utils.showToast('Terjadi kesalahan');
        });
      }
    
      ionViewWillEnter() {
      this.getData();
      }
    
        doRefresh(event) {
          this.getData();
          setTimeout(() => {
          event.target.complete();
          }, 1000);
        }
    
        async goAdd() {
          const modal = await this.modalCtrl.create({
            component: UserAddPage
          });
          modal.onWillDismiss().then(() => {
            this.getData();
          });
          return await modal.present();
        }
    
        goDetail(user) {
          console.log('id: ' + user.id);
          this.router.navigate(['/user-detail/' + user.id]);
        }
    
        async delete(user) {
          const alert = await this.alertCtrl.create({
            header: 'Konfirmasi!',
            message: 'Apakah anda yakin akan menghapus user <strong>' + user.username + '</strong>',
            buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (lol) => {
                console.log('cancel' + lol);
              }
            },
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
                this.userService.deleteUser(user.id)
                .subscribe((response) => {
                  console.log(response);
                  this.utils.showToast('Berhasil dihapus')
                  this.getData();
                }, (err) => {
                  console.log(JSON.stringify(err));
                  this.utils.showToast('Terjadi kesalahan');
                });
              }
            }]
          });
          alert.present();
        }

}
