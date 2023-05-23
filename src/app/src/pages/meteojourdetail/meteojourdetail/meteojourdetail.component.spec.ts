import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteojourdetailComponent } from './meteojourdetail.component';

describe('MeteojourdetailComponent', () => {
  let component: MeteojourdetailComponent;
  let fixture: ComponentFixture<MeteojourdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteojourdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteojourdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
