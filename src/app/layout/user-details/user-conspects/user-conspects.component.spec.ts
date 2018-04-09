import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConspectsComponent } from './user-conspects.component';

describe('UserConspectsComponent', () => {
  let component: UserConspectsComponent;
  let fixture: ComponentFixture<UserConspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
