import { AfterViewInit, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectComponent } from 'src/app/popups/project/project.component';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  projectFormGroup: FormGroup;
  selectedSubject: any = '';
  _tryFeature: boolean = false;
  selectedSubj: any = 0;
  interestedSubject: string[] = ['Landing Page', 'Portfolio', 'Ecommerce Website', 'Blog Website'];
  projects: any[] = [{
    name: "My Portfolio",
    title: "My Portfolio",
    about: "This portfolio is important for me as a developer to showcase projects and technical skills which demostrates what I can do.",
    technologies: ['AngularJs', 'Node.js', 'MongoDB'],
    color: false,
    git: 'https://github.com/ghothini/mokotelakoena-portfolio',
    deployment: 'https://portfolio-d1b4c.web.app/'
  }, {
    name: "Neutrinos Operations",
    title: "Neutrinos Operations",
    about: "Web application for managing Visa Applications, Visa Extensions, Leave Applications, Guesthouse Services, International Travels and Domestic Travels for Neutrinos RSA.",
    technologies: ['AngularJs', 'Node.js', 'MongoDB'],
    color: true,
    git: 'https://github.com/ghothini/neutrinos-operations-management-demo',
    deployment: 'https://firebase.google.com/'
  }]
  _value: string = '';

  constructor(private dialog: MatDialog) {
    this.projectFormGroup = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  ngAfterViewInit(): void {
    const loaderDotsElement = document.getElementById('auto-type') as HTMLElement;
    var typed = new Typed(loaderDotsElement, {
      strings: ['Im interested in ...'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      showCursor: false
    })
  }

  showProject(indx: any): void {
    this.dialog.open(ProjectComponent, {
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

  selectingSubj(i: any, subj: any) {
    this.selectedSubj = i;
    this.selectedSubject = subj;
    this.projectFormGroup.value.subject = subj;
    this._value = subj
  }

  submit(): void {
    if (this.projectFormGroup.invalid) return
  }
}
