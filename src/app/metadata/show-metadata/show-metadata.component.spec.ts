import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMetadataComponent } from './show-metadata.component';

describe('ShowMetadataComponent', () => {
  let component: ShowMetadataComponent;
  let fixture: ComponentFixture<ShowMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMetadataComponent]
    });
    fixture = TestBed.createComponent(ShowMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
