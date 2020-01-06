import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NgForm } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PcategoryComponent } from './pcategory/pcategory.component';
import { ProductComponent } from './product/product.component';

const routerlinks=[
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'pcategory', component:PcategoryComponent},
  {path:'product/:id',component:ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PcategoryComponent,
    ProductComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerlinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
