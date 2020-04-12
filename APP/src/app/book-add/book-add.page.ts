import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.page.html',
  styleUrls: ['./book-add.page.scss'],
})
export class BookAddPage implements OnInit {
  book: any = {}
  constructor(
    private bookService: BookService,
    private modalCtrl: ModalController,
    private utils: UtilsService,
    private imagePicker: ImagePicker,
    private base64: Base64,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private file: File,
    private transfer: FileTransfer

  ) { }
  ngOnInit() { }




  submit() {
    this.bookService.createBook(this.book).subscribe((response) => {
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