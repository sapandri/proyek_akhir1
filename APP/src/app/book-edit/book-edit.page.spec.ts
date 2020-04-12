import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookEditPage } from './book-edit.page';

describe('BookEditPage', () => {
  let component: BookEditPage;
  let fixture: ComponentFixture<BookEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
