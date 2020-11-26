import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoctificationsPage } from './noctifications.page';

describe('NoctificationsPage', () => {
  let component: NoctificationsPage;
  let fixture: ComponentFixture<NoctificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoctificationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoctificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
