import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { BookAddPage } from '../book-add/book-add.page';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'] 
})
export class Tab2Page {

  books: any = [];

  constructor(
    private bookService: BookService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private utils: UtilsService
  ) {}

  getData() {
  this.bookService.getAllBooks().subscribe(
    (response) => {
      console.log(response);
      this.books = response;
    },
    (err) => {
      this.books = [];
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
        component: BookAddPage

        
      });
      modal.onWillDismiss().then(() => {
        this.getData();
      });
      return await modal.present();
    }

    goDetail(book) {
      console.log('id: ' + book.id);
      this.router.navigate(['/book-detail/' + book.id]);
    }

    
async goEdit(book) {
  this.router.navigate(['/book-edit/' + book.id]);
  }

    async delete(book) {
      const alert = await this.alertCtrl.create({
        header: 'Konfirmasi!',
        message: 'Apakah anda yakin akan menghapus buku <strong>' + book.title + '</strong>',
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
            this.bookService.deleteBook(book.id)
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
