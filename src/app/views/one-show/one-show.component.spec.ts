import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneShowComponent } from './one-show.component';

describe('OneShowComponent', () => {
  let component: OneShowComponent;
  let fixture: ComponentFixture<OneShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
