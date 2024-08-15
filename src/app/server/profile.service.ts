import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private nameSource = new BehaviorSubject<string>('Kongphop Tadee');
  private emailSource = new BehaviorSubject<string>('modelmd26@gmail.com');
  private passwordSource = new BehaviorSubject<string>('');
  private nameshipSource = new BehaviorSubject<string>('Kongphop Tadee');
  private telSource = new BehaviorSubject<string>('0987654321');
  private countrySource = new BehaviorSubject<string>('Thailand');
  private addressSource = new BehaviorSubject<string>('123/45');
  private citySource = new BehaviorSubject<string>('Mueang Khon Kaen');
  private provinceSource = new BehaviorSubject<string>('Khon Kean');
  private postalcodeSource = new BehaviorSubject<string>('40000');

  name$ = this.nameSource.asObservable();
  email$ = this.emailSource.asObservable();
  password$ = this.passwordSource.asObservable();
  nameship$ = this.nameshipSource.asObservable();
  tel$ = this.telSource.asObservable();
  country$ = this.countrySource.asObservable();
  address$ = this.addressSource.asObservable();
  city$ = this.citySource.asObservable();
  province$ = this.provinceSource.asObservable();
  postalcode$ = this.postalcodeSource.asObservable();

  constructor() {}

  setName(name: string): void {
    this.nameSource.next(name);
  }
  
  setEmail(email: string): void {
    this.emailSource.next(email);
  }
  
  setPassword(password: string): void {
    this.passwordSource.next(password);
  }
  ////////////////////
  getName(): string {
    return this.nameSource.getValue();
  }
  
  getEmail(): string {
    return this.emailSource.getValue();
  }

  getPassword(): string {
    return this.passwordSource.getValue();
  }

  ////////////////////
  setNameShip(nameship: string): void {
    this.nameshipSource.next(nameship);
  }

  setTel(tel: string): void {
    this.telSource.next(tel);
  }

  setCountry(country: string): void {
    this.countrySource.next(country);
  }

  setAddress(address: string): void {
    this.addressSource.next(address);
  }

  setCity(city: string): void {
    this.citySource.next(city);
  }

  setProvince(province: string): void {
    this.provinceSource.next(province);
  }

  setPostalcode(postalcode: string): void {
    this.postalcodeSource.next(postalcode);
  }

  ////////////////////
  getNameShip(): string {
    return this.nameshipSource.getValue();
  }

  getTel(): string {
    return this.telSource.getValue();
  }

  getCountry(): string {
    return this.countrySource.getValue();
  }

  getAddress(): string {
    return this.addressSource.getValue();
  }

  getCity(): string {
    return this.citySource.getValue();
  }

  getProvince(): string {
    return this.provinceSource.getValue();
  }

  getPostalcode(): string {
    return this.postalcodeSource.getValue();
  }
}