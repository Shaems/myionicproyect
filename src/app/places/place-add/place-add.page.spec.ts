import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesAddPage } from './place-add.page';

describe('PlacesAddPage', () => {
  let component: PlacesAddPage;
  let fixture: ComponentFixture<PlacesAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
