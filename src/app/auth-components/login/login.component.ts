import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from '../../shared/classes/material.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        //MaterialService.toast('Теперь вы можете зайти в систему используя свои данные')
      } else if (params['accessDenied']) {
       // MaterialService.toast('Для начала авторизуйтесь в системе')
      } else if (params['sessionFailed']) {
       // MaterialService.toast('Пожалуйста войдите в систему заного')
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/profile']),
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )
  }

}
