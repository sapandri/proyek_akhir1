import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookAddPage } from './book-add.page';

describe('BookAddPage', () => {
  let component: BookAddPage;
  let fixture: ComponentFixture<BookAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
