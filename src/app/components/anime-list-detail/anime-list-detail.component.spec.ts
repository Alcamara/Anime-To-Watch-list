import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeListDetailComponent } from './anime-list-detail.component';

describe('AnimeListDetailComponent', () => {
  let component: AnimeListDetailComponent;
  let fixture: ComponentFixture<AnimeListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeListDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
