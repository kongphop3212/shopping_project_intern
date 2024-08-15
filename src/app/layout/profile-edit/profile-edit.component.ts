import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../server/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.name = this.profileService.getName();
    this.email = this.profileService.getEmail();
    this.password = this.profileService.getPassword();
  }

  saveChanges() {
    this.profileService.setName(this.name);
    this.profileService.setEmail(this.email);
    this.profileService.setPassword(this.password);
    this.router.navigate(['/account']);
  }
  
  

  cancelChanges() {
    this.router.navigate(['/account']);
  }
}