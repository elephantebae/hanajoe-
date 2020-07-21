import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClayJewelryComponent } from './clay-jewelry.component';

describe('ClayJewelryComponent', () => {
  let component: ClayJewelryComponent;
  let fixture: ComponentFixture<ClayJewelryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClayJewelryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClayJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
