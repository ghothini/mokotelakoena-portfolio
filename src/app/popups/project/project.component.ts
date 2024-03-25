import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project: any;

  constructor(private router: Router,
    private dialogRef: MatDialogRef<ProjectComponent>,
    @Inject (MAT_DIALOG_DATA) private _project: any) {
    this.project = _project._project;
  }

  routeTo(link: any): void {
    // Take user to site
    window.open(link, '_blank')
  }

  close(): void {
    this.dialogRef.close();
  }
}
