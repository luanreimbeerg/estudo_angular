import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mixin } from '../../shared/mixins/mixin';
import { FormErrorMixin } from '../../shared/mixins/form-error.mixin';
import { DefaultConstants } from '../../shared/constants/default.constants';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide = true;
  public checked = false;
  public user!: string;
  public errorMessage!: string;
  public error = false;

  public hasError!: (
    controlName: string,
    errorName: string,
    loginForm: FormGroup
  ) => false;

  @Output() loginError = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,

    private router: Router
  ) {}

  ngOnInit(): void {
    Mixin.applyMixins(SigninComponent, [FormErrorMixin]);

    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });


  }
}
