import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowArcGisComponent } from './show-arc-gis.component';

describe('ShowArcGisComponent', () => {
  let component: ShowArcGisComponent;
  let fixture: ComponentFixture<ShowArcGisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowArcGisComponent]
    });
    fixture = TestBed.createComponent(ShowArcGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
