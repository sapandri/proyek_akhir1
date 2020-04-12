//src/app/book-edit/book-edit.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { UtilsService } from '../services/utils.service';
@Component({
 selector: 'app-book-edit',
 templateUrl: './book-edit.page.html',
 styleUrls: ['./book-edit.page.scss'],
})
export class BookEditPage implements OnInit {
 book: any = {};
 bookId = '';
 constructor(
 private activatedRoute: ActivatedRoute,
 private bookService: BookService,
 private router: Router,
 private utils: UtilsService
 ) {
 this.getData();
 }
 ngOnInit() { }
 getData() {
 this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
 this.bookService.getBook(this.bookId).subscribe((response) => {
 this.book = response;
 });
 }
 update() {
 this.bookService.updateBook(
 this.bookId, this.book).subscribe((response) => {
 console.log(response);
 this.utils.showToast('Berhasil dirubah');
 this.router.navigate(['/book-detail/' + this.bookId]);
 }, (err) => {
 console.log(JSON.stringify(err));
 this.utils.showToast('Terjadi kesalahan');
 });
 }
}