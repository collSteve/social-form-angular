import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionsDialogComponent } from './post-options-dialog.component';

describe('PostOptionsDialogComponent', () => {
  let component: PostOptionsDialogComponent;
  let fixture: ComponentFixture<PostOptionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOptionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
