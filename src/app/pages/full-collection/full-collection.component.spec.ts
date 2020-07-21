import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCollectionComponent } from './full-collection.component';

describe('FullCollectionComponent', () => {
  let component: FullCollectionComponent;
  let fixture: ComponentFixture<FullCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
