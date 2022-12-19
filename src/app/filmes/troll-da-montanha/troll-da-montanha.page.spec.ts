import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrollDaMontanhaPage } from './troll-da-montanha.page';

describe('TrollDaMontanhaPage', () => {
  let component: TrollDaMontanhaPage;
  let fixture: ComponentFixture<TrollDaMontanhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrollDaMontanhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrollDaMontanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
