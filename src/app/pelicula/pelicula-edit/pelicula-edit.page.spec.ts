import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculaEditPage } from './pelicula-edit.page';

describe('PeliculaEditPage', () => {
  let component: PeliculaEditPage;
  let fixture: ComponentFixture<PeliculaEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
