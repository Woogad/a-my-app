import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDBPage } from './home-db.page';

describe('HomeDBPage', () => {
  let component: HomeDBPage;
  let fixture: ComponentFixture<HomeDBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeDBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
