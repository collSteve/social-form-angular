import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDescriptionsComponent } from './form-descriptions.component';

describe('FormDescriptionsComponent', () => {
  let component: FormDescriptionsComponent;
  let fixture: ComponentFixture<FormDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
