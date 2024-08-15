import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../server/profile.service';

@Component({
  selector: 'app-shipping-edit',
  templateUrl: './shipping-edit.component.html',
  styleUrls: ['./shipping-edit.component.scss']
})
export class ShippingEditComponent implements OnInit {
  nameship: string = '';
  tel: string = '';
  country: string = '';
  address: string = '';
  city: string = '';
  province: string = '';
  postalcode: string = '';

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.nameship = this.profileService.getNameShip();
    this.tel = this.profileService.getTel();
    this.country = this.profileService.getCountry();
    this.address = this.profileService.getAddress();
    this.city = this.profileService.getCity();
    this.province = this.profileService.getProvince();
    this.postalcode = this.profileService.getPostalcode();
  }

  saveChanges() {
    this.profileService.setNameShip(this.nameship);
    this.profileService.setTel(this.tel);
    this.profileService.setCountry(this.country);
    this.profileService.setAddress(this.address);
    this.profileService.setCity(this.city);
    this.profileService.setProvince(this.province);
    this.profileService.setPostalcode(this.postalcode);
    this.router.navigate(['/account']);
  }
  
  

  cancelChanges() {
    this.router.navigate(['/account']);
  }
}
