//src/app/book-detail/book-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { mainUrl } from '../services/config';
@Component({ selector: 'app-book-detail',
templateUrl: './book-detail.page.html',
styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
book: any = {};
bookId = '';
constructor(
private activatedRoute: ActivatedRoute,
private bookService: BookService,
private router: Router
) { }
getData() {
this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
this.bookService.getBook(this.bookId).subscribe((response) => {
this.book = response;
this.book.images = mainUrl + '/img/' + this.book.images;
console.log(this.book)
})
}
goEdit() {
this.router.navigate(['/book-edit/' + this.bookId])
}
ngOnInit() { }
ionViewWillEnter() {
this.getData();
}
}
