import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevShowCreatePostComponent } from './dev-show-create-post.component';

describe('DevShowCreatePostComponent', () => {
  let component: DevShowCreatePostComponent;
  let fixture: ComponentFixture<DevShowCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevShowCreatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevShowCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
