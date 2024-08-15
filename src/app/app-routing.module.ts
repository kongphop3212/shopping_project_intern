import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './layout/category/category.component';
import { ProductDetailIndexComponent } from './detail/product-detail-index/product-detail-index.component';
import { ProductDetailIndex2Component } from './detail/product-detail-index2/product-detail-index2.component';
import { ProfileEditComponent } from './layout/profile-edit/profile-edit.component';
import { ProflieMenuComponent } from './layout/proflie-menu/proflie-menu.component';
import { ProflieComponent } from './layout/proflie/proflie.component';
import { SearchBarComponent } from './layout/search-bar/search-bar.component';
import { SildeImageComponent } from './layout/silde-image/silde-image.component';
import { AccountComponent } from './pages/account/account.component';
import { IndexComponent } from './pages/index/index.component';
import { Index2Component } from './pages/index2/index2.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { ProductIndex2Component } from './product/product-index2/product-index2.component';
import { ProductShirtsIndexComponent } from './product/product-shirts-index/product-shirts-index.component';
import { ProductShirtsIndex2Component } from './product/product-shirts-index2/product-shirts-index2.component';
import { ShippingEditComponent } from './layout/shipping-edit/shipping-edit.component';
import { EditProfileComponent } from './edit/edit-profile/edit-profile.component';
import { EditShippingComponent } from './edit/edit-shipping/edit-shipping.component';





const routes: Routes = [
  {
    path: '',
    redirectTo: '/index2',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'index2',
    component: Index2Component,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'proflie',
    component: ProflieComponent,
  },
  {
    path: 'profile-edit',
    component: ProfileEditComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'proflie-menu',
    component: ProflieMenuComponent,
  },
  {
    path: 'product-index',
    component: ProductIndexComponent,
  },
  {
    path: 'product-index2',
    component: ProductIndex2Component,
  },
  {
    path: 'silde-image',
    component: SildeImageComponent,
  },
  {
    path: 'search-bar',
    component: SearchBarComponent,
  },
  {
    path: 'product-shirts-index',
    component: ProductShirtsIndexComponent,
  },
  {
    path: 'product-shirts-index2',
    component: ProductShirtsIndex2Component,
  },
  {
    path: 'product-detail-index/:name',
    component: ProductDetailIndexComponent,
  },
  {
    path: 'product-detail-index2/:name',
    component: ProductDetailIndex2Component,
  },
  {
    path: 'shipping-edit',
    component: ShippingEditComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {
    path: 'edit-shipping',
    component: EditShippingComponent,
  },
  { path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
