import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeImageComponent } from './silde-image.component';

describe('SildeImageComponent', () => {
  let component: SildeImageComponent;
  let fixture: ComponentFixture<SildeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SildeImageComponent]
    });
    fixture = TestBed.createComponent(SildeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
