import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: ['']
    });
  }

  onSignup() {
    this._http.post("http://localhost:3000/signup", this.signUpForm.value)
      .subscribe(
        _ => {
          alert("Registration provided successfully");
          this.signUpForm.reset();
          this.router.navigate(['login']);
        }, _ => {
          alert("Something went wrong");
        }
      );
  }
}
