import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator,PhoneValidator } from '../validators';
import { environment } from '../../environments/environment';
import { HttpClient } from  "@angular/common/http";
import {MatSnackBar} from '@angular/material/snack-bar';
import {SpinnerService} from '../services/spinner.service';
import {SignupService} from '../services/signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public loginForm: FormGroup;
  public signUpForm: FormGroup;
  public OTPForm: FormGroup;
  public email: AbstractControl;
  public semail: AbstractControl;
  public password: AbstractControl;
  public spassword: AbstractControl;
  public fullName: AbstractControl;
  public mobileNumber: AbstractControl;
  public motp:AbstractControl;
  public eotp:AbstractControl;
  public isSignup:boolean = false;
  public headerButtonText:string = 'Sign up';
  public url:string = environment.api_url;

  public isOTPPage:boolean = false;

  public isActive:boolean = false;
  public otpVerifyFlag:boolean = false;
  public otpMsg:string = '';
  constructor(private fb: FormBuilder,private  service:SignupService,private _spinner:SpinnerService,private snackbar:MatSnackBar,private router: Router) { 
    this.loginForm = fb.group({
      'email': ['', Validators.compose([Validators.required,EmailValidator.validate])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.signUpForm = fb.group({
      'semail': ['', Validators.compose([Validators.required,Validators.email])],
      'spassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'fullName': ['', Validators.compose([Validators.required])],
      'mobileNumber':['', Validators.compose([Validators.required,Validators.minLength(10),PhoneValidator.validate])]
    })
    this.OTPForm = fb.group({
       'motp': ['', Validators.compose([Validators.required])],
       'eotp': ['', Validators.compose([Validators.required])]
    })
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
    this.semail = this.signUpForm.controls['semail'];
    this.spassword = this.signUpForm.controls['spassword'];
    this.fullName = this.signUpForm.controls['fullName'];
    this.mobileNumber = this.signUpForm.controls['mobileNumber'];
    this.motp = this.OTPForm.controls['motp'];
    this.eotp = this.OTPForm.controls['eotp'];
  }

  ngOnInit() {
    this._spinner.hide();
  }

  changeView(){
    this.headerButtonText = (this.isSignup)?'Sign up':'Login'
    this.isSignup = !this.isSignup;
    this.isOTPPage = false;
  }

  callSignUp(){
    let inputObj = {
      'fullName':this.fullName.value,
      'eMail':this.semail.value,
      'mobileNo':this.mobileNumber.value,
      'pwd':this.spassword.value
    }
    this._spinner.show();
    this.service.signUpUser(inputObj).subscribe((data:any)  => {
        if(data.success){
          if(data.isExist){
            this.openSnackBar('Already Registered.Please Login.','');
          }else{
            
            this.isOTPPage = true;
            this.isSignup = false;
          }
            
            
        }else{
          this.openSnackBar('Something went wrong.Please try again','');
        } 
        this._spinner.hide();
        },
        error  => {
        console.log("Error", error);
        this._spinner.hide();
        });
  }

  validateOTP(){
    let inputObj = {
      'email':this.semail.value,
      'mobileNo':this.mobileNumber.value,
      'mobileOtp':this.motp.value,
      'emailOtp':this.eotp.value
    }   
    this._spinner.show();
    this.service.verifyUser(inputObj).subscribe((data:any)=>{
      
      if(data.success){
          this.openSnackBar('Account is verified.Please Login to use our features.','');
      }else{
          this.openSnackBar(data.message,'');
      }
      this._spinner.hide();
    })
  }

  getMobileOTP(){
    let inputObj = {
      'strmobileNo':this.mobileNumber.value,
    }  
    this._spinner.show();
    this.service.getMobileOTP(inputObj).subscribe((data:any)=>{
      if(data.success){
        this.openSnackBar('Mobile OTP sent successfully','');
      }else{
        this.openSnackBar('Something went wrong.Please try again','');
      }
      this._spinner.hide();
    })
    
  }

  getEmailOTP(){
    let inputObj = {
      'strEmailId':this.semail.value,
    }  
    this._spinner.show();
    this.service.getEmailOTP(inputObj).subscribe((data:any)=>{
      if(data.success){
        this.openSnackBar('Email OTP sent successfully','');
      }else{
        this.openSnackBar('Something went wrong.Please try again','');
      }
      this._spinner.hide();
    })
  }

  callLogin(){
    let inputObj = {
      'email':this.email.value,
      'pwd':this.password.value
    }
    this._spinner.show();
    this.service.login(inputObj).subscribe((data:any)=>{
      if(data.success){
        this.router.navigate(['/eventHome']);
      }else{
        this.openSnackBar('Please check the credentials','');
      }
      this._spinner.hide();
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }
}
