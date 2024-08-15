import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProflieMenuComponent } from './proflie-menu.component';

describe('ProflieMenuComponent', () => {
  let component: ProflieMenuComponent;
  let fixture: ComponentFixture<ProflieMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProflieMenuComponent]
    });
    fixture = TestBed.createComponent(ProflieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
