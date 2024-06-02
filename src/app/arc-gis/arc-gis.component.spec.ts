import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcGisComponent } from './arc-gis.component';

describe('ArcGisComponent', () => {
  let component: ArcGisComponent;
  let fixture: ComponentFixture<ArcGisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcGisComponent]
    });
    fixture = TestBed.createComponent(ArcGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
