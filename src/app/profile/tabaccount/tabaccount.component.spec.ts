import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabaccountComponent } from './tabaccount.component';

describe('TabaccountComponent', () => {
  let component: TabaccountComponent;
  let fixture: ComponentFixture<TabaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
