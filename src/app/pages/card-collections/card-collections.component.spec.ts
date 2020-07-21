import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollectionsComponent } from './card-collections.component';

describe('CardCollectionsComponent', () => {
  let component: CardCollectionsComponent;
  let fixture: ComponentFixture<CardCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
