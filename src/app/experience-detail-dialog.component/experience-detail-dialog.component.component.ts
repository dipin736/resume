import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-experience-detail-dialog.component',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './experience-detail-dialog.component.component.html',
  styleUrl: './experience-detail-dialog.component.component.css'
})
export class ExperienceDetailDialogComponentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public job: any,
    private dialogRef: MatDialogRef<ExperienceDetailDialogComponentComponent>
  ) {}
  
  ngOnInit() {
    console.log('Job details data: ', this.job);
  }
  onClose() {
    this.dialogRef.close();
  }
}
