import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTvComponent } from './on-tv.component';

describe('OnTvComponent', () => {
  let component: OnTvComponent;
  let fixture: ComponentFixture<OnTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
