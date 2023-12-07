import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardMainComponent } from './admin-dashboard/admin-dashboard-main/admin-dashboard-main.component';
import { RegisterEmployeesComponent } from './admin-dashboard/Employees/register-employees/register-employees.component';
import { ViewEmployeesComponent } from './admin-dashboard/Employees/view-employees/view-employees.component';
import { CategoryComponent } from './category/category.component';

import { ListProductsComponent } from './list-products/list-products.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProviderComponent } from './provider/provider.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartementComponent } from './components/Departements/departement/departement.component';

const routes: Routes = [
  {path:'admin-dashboard',component:AdminDashboardMainComponent,children:[
    {path:'register-employees',component:RegisterEmployeesComponent},
    {path:'view-employees',component:ViewEmployeesComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ListProductsComponent},
  {path:'product',component:ProductComponent},
  {path:'providers',component:ProviderComponent},
  {path:'category',component:CategoryComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'departements',component:DepartementComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
