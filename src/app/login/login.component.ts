import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onLogin() {
    this._http.get<any>("http://localhost:3000/signup")
      .subscribe(res => {
        const user = res.find((u: any) => {
          return u.email === this.loginForm.value.email
            && u.password === this.loginForm.value.password;
        });
        if (user) {
          alert("Login successfully");
          this.loginForm.reset();
          this.router.navigate(['restaurant']);
        } else {
          alert("User not found");
        }
      }, _ => {
        alert("Something went wrong");
      });
  }
}
