import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherTestLibComponent } from './ether-test-lib.component';

describe('EtherTestLibComponent', () => {
  let component: EtherTestLibComponent;
  let fixture: ComponentFixture<EtherTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherTestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
