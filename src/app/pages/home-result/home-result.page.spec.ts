import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeResultPage } from './home-result.page';

describe('HomeResultPage', () => {
  let component: HomeResultPage;
  let fixture: ComponentFixture<HomeResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
