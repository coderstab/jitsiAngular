import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JitsiAngularComponent } from './jitsi-angular.component';

describe('JitsiAngularComponent', () => {
  let component: JitsiAngularComponent;
  let fixture: ComponentFixture<JitsiAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JitsiAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JitsiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
