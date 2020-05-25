import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserProfile } from '../../shared/interfaces';
import { UserService } from '../../shared/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialService, MaterialInstance } from '../../shared/classes/material.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('modal',{static:false}) modalRef: ElementRef
  form: FormGroup
  aSub: Subscription
  modal: MaterialInstance

  usernameValue: string
  emailValue: string
  firstNameValue: string
  lastNameValue: string
  ageValue: number
  phoneValue: number

  constructor(private userService: UserService) { }

  user$: Observable<UserProfile>

  ngOnInit() {
    this.profileInForm()

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  open() {
    this.modal.open()
  }

  cancel() {
    this.modal.close()
  }

  profileInForm(){
    this.userService.getUserProfile().subscribe(user => {
      this.usernameValue = user.username
      this.emailValue = user.email
      this.firstNameValue = user.firstName? user.firstName: ""
      this.lastNameValue = user.lastName? user.lastName: ""
      this.ageValue = user.age? user.age: null
      this.phoneValue = user.phoneNumber? user.phoneNumber: null
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()

    this.aSub = this.userService.updateUserProfile(this.form.value).subscribe(
      error => {
        // MaterialService.toast(error.error.message)
        this.form.enable()
        this.modal.close()
        this.profileInForm()
      }
    )
  }
}
