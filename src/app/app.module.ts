import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardMainComponent } from './admin-dashboard/admin-dashboard-main/admin-dashboard-main.component';
import { RegisterEmployeesComponent } from './admin-dashboard/Employees/register-employees/register-employees.component';
import { ViewEmployeesComponent } from './admin-dashboard/Employees/view-employees/view-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { ProviderComponent } from './provider/provider.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartementComponent } from './components/Departements/departement/departement.component';

import { LeaveRequestFormComponent } from './components/LeaveRequest/leave-request-form/leave-request-form.component';
import { InjectableRxStompConfig, RxStompService, StompConfig } from '@stomp/ng2-stompjs';
import { NewLeaveRequestNotificationComponent } from './components/NewLeaveRequestNotification/new-leave-request-notification/new-leave-request-notification.component';

const stompConfig: StompConfig = {
  // URL du serveur WebSocket
  url: 'ws://localhost:9099/ws',

  // Headers facultatifs (selon vos besoins)
  headers: {
    login: 'guest',
    passcode: 'guest',
  },

  // Propriétés manquantes
  heartbeat_in: 0,
  heartbeat_out: 20000,
  reconnect_delay: 5000,
  debug: true, // Mettez à false si vous ne voulez pas de messages de débogage

  // Optionnel : Topic principal (peut être vide si vous ne l'utilisez pas)
  // topic: '/topic',
};
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardMainComponent,
    RegisterEmployeesComponent,
    ViewEmployeesComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ListProductsComponent,
    SidebarComponent,
    RequisitionComponent,
    ProviderComponent,
    HeaderComponent,
    CategoryComponent,
    EmployeesComponent,
    DepartementComponent,
    LeaveRequestFormComponent,
    NewLeaveRequestNotificationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    RxStompService,
    {
      provide: InjectableRxStompConfig,
      useValue: stompConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
