import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhysicalComponent } from './edit-physical.component';

describe('EditPhysicalComponent', () => {
  let component: EditPhysicalComponent;
  let fixture: ComponentFixture<EditPhysicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPhysicalComponent]
    });
    fixture = TestBed.createComponent(EditPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
