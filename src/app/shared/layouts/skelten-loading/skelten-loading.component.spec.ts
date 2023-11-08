import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeltenLoadingComponent } from './skelten-loading.component';

describe('SkeltenLoadingComponent', () => {
  let component: SkeltenLoadingComponent;
  let fixture: ComponentFixture<SkeltenLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeltenLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeltenLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
