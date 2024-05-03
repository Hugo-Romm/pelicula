import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculaListPage } from './pelicula-list.page';

describe('PeliculaListPage', () => {
  let component: PeliculaListPage;
  let fixture: ComponentFixture<PeliculaListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
