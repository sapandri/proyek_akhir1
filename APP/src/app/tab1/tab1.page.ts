import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { Tab2Page } from '../tab2/tab2.page';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private bookService: BookService,

    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private utils: UtilsService

  ) {}


  
  async tabs2() {
    const modal = await this.modalCtrl.create({
      component: Tab2Page 
      })}
  
    }