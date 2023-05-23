import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoseptjourComponent } from './meteoseptjour.component';

describe('MeteoseptjourComponent', () => {
  let component: MeteoseptjourComponent;
  let fixture: ComponentFixture<MeteoseptjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoseptjourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoseptjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
