import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BookAddPage } from  './book-add/book-add.page';
import { UserAddPage } from  './user-add/user-add.page';
import { FormsModule } from '@angular/forms';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';



@NgModule({
  declarations: [AppComponent, BookAddPage, UserAddPage],
  entryComponents: [BookAddPage, UserAddPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Base64,
    Camera,
    File,
    FileTransfer,
    FileChooser,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
