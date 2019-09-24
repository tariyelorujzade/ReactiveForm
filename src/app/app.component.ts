import { Component, OnInit }                       from '@angular/core';
import { FormGroup, FormControl, Validators }      from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 signupForm:FormGroup;

  ngOnInit(){
   this.singnUp();  
  }
    
  singnUp(){
    this.signupForm = new FormGroup({
      'projectName':    new FormControl('xxxx',[Validators.required, this.customValidator]),
         'mail':        new FormControl(null, [Validators.required, Validators.email]),
      'project_status': new FormControl('Critical')
    })
     return this.signupForm;
  }
   
  customValidator(control:FormControl){
  if(control.value == 'Test'){
           return {forbidden: true};
    }
     return null;
  }
  onSubmit(){
     console.log(this.signupForm);
  }
  
}

