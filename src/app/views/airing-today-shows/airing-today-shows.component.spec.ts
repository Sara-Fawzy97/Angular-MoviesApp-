import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringTodayShowsComponent } from './airing-today-shows.component';

describe('AiringTodayShowsComponent', () => {
  let component: AiringTodayShowsComponent;
  let fixture: ComponentFixture<AiringTodayShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiringTodayShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiringTodayShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
