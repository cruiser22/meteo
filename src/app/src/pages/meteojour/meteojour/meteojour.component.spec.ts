import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteojourComponent } from './meteojour.component';

describe('MeteojourComponent', () => {
  let component: MeteojourComponent;
  let fixture: ComponentFixture<MeteojourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteojourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteojourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
