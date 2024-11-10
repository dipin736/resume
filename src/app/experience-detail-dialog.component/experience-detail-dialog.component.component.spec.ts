import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailDialogComponentComponent } from './experience-detail-dialog.component.component';

describe('ExperienceDetailDialogComponentComponent', () => {
  let component: ExperienceDetailDialogComponentComponent;
  let fixture: ComponentFixture<ExperienceDetailDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailDialogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
