import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectComponent } from 'src/app/popups/project/project.component';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  projectFormGroup: FormGroup;

  _tryFeature: boolean = false;
  selectedSubj: any = 0;
  interestedSubject: string[] = ['Landing Page','Portfolio','Ecommerce Website','Blog Website'];
  projects: any[] = [{
    name: "My Portfolio",
    title: "My Portfolio",
    about: "This portfolio is important for me as a developer to showcase projects and technical skills which demostrates what I can do.",
    technologies: ['AngularJs','Node.js','MongoDB'],
    color: false,
    git: 'https://github.com/ghothini/mokotelakoena-portfolio',
    deployment: 'https://firebase.google.com/'
  },{
    name: "Neutrinos Operations",
    title: "Neutrinos Operations",
    about: "Web application for managing Visa Applications, Visa Extensions, Leave Applications, Guesthouse Services, International Travels and Domestic Travels for Neutrinos RSA.",
    technologies: ['AngularJs','Node.js','MongoDB'],
    color: true,
    git: 'https://github.com/ghothini',
    deployment: 'https://firebase.google.com/'
  }]
  _value: string = '';

  constructor(private dialog: MatDialog){
    this.projectFormGroup = new FormGroup({
      customerName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      subject: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required])
    })
  }

  showProject(indx: any): void {
    this.dialog.open(ProjectComponent,{
      data: {
        _project: this.projects[indx]
      }
    })
  }

  tryFeature(): void {
    this._tryFeature = !this._tryFeature;
  }
  
  goTo(link: any): void {
    // Take user to site
    window.open(link, '_blank');
  }

  selectingSubj(i: any,subj: any) {
    this.selectedSubj = i;
    this.projectFormGroup.value.subject = subj
    this._value = subj
  }

  submit(): void {
    if(this.projectFormGroup.invalid) return
    console.log("this.projectFormGroup.value",this.projectFormGroup.value)
  }
}
