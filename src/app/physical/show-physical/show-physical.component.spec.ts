import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhysicalComponent } from './show-physical.component';

describe('ShowPhysicalComponent', () => {
  let component: ShowPhysicalComponent;
  let fixture: ComponentFixture<ShowPhysicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPhysicalComponent]
    });
    fixture = TestBed.createComponent(ShowPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
