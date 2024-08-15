import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductDetailIndexComponent } from "./detail/product-detail-index/product-detail-index.component";
import { ProductDetailIndex2Component } from "./detail/product-detail-index2/product-detail-index2.component";
import { EditProfileComponent } from "./edit/edit-profile/edit-profile.component";
import { EditShippingComponent } from "./edit/edit-shipping/edit-shipping.component";
import { CategoryComponent } from "./layout/category/category.component";
import { ProfileEditComponent } from "./layout/profile-edit/profile-edit.component";
import { ProflieMenuComponent } from "./layout/proflie-menu/proflie-menu.component";
import { ProflieComponent } from "./layout/proflie/proflie.component";
import { SearchBarComponent } from "./layout/search-bar/search-bar.component";
import { ShippingEditComponent } from "./layout/shipping-edit/shipping-edit.component";
import { SildeImageComponent } from "./layout/silde-image/silde-image.component";
import { AccountComponent } from "./pages/account/account.component";
import { IndexComponent } from "./pages/index/index.component";
import { Index2Component } from "./pages/index2/index2.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProductIndexComponent } from "./product/product-index/product-index.component";
import { ProductIndex2Component } from "./product/product-index2/product-index2.component";
import { ProductShirtsIndexComponent } from "./product/product-shirts-index/product-shirts-index.component";
import { ProductShirtsIndex2Component } from "./product/product-shirts-index2/product-shirts-index2.component";
import { HttpClientModule } from "@angular/common/http";










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    Index2Component,
    AccountComponent,
    CategoryComponent,
    ProductDetailIndexComponent,
    ProductDetailIndex2Component,
    ProductIndexComponent,
    ProductShirtsIndexComponent,
    SearchBarComponent,
    SildeImageComponent,
    ProductShirtsIndex2Component,
    ProductIndex2Component,
    ProflieComponent,
    ProflieMenuComponent,
    ProfileEditComponent,
    ShippingEditComponent,
    EditProfileComponent,
    EditShippingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
