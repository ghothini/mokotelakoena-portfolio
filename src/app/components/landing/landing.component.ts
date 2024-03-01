import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectComponent } from 'src/app/popups/project/project.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  projects: any = [{name: "My Portfolio",nodejs: true,angular: true,mongodb: true},
  {name: "Likes Meter Flicks",nodejs: true,angular: false,mongodb: false}]

  constructor(private dialog: MatDialog){}

  showProject(): void {
    this.dialog.open(ProjectComponent,{
    })
  }
}
