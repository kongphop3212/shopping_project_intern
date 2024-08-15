  import { Component, OnInit } from '@angular/core';
  import { ProfileService } from 'src/app/server/profile.service';

  @Component({
    selector: 'app-proflie',
    templateUrl: './proflie.component.html',
    styleUrls: ['./proflie.component.scss']
  })
  export class ProflieComponent implements OnInit {
    name: string = '';
    email: string = '';
    password: string = '';
    nameship: string = '';
    country: string = '';
    address: string = '';
    city: string = '';
    province: string = '';
    postalcode: string = '';
    tel: string = '';
  
    constructor(private profileService: ProfileService) { }
  
    ngOnInit() {
      this.profileService.name$.subscribe(name => this.name = name);
      this.profileService.email$.subscribe(email => this.email = email);
      this.profileService.password$.subscribe(password => this.password = password);
      this.profileService.nameship$.subscribe(nameship => this.nameship = nameship);
      this.profileService.country$.subscribe(country => this.country = country);
      this.profileService.address$.subscribe(address => this.address = address);
      this.profileService.city$.subscribe(city => this.city = city);
      this.profileService.province$.subscribe(province => this.province = province);
      this.profileService.postalcode$.subscribe(postalcode => this.postalcode = postalcode);
      this.profileService.tel$.subscribe(tel => this.tel = tel);
    }
  }