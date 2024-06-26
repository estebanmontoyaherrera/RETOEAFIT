import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: '', component: NavbarComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'register', component: RegisterComponent},
    // {path: 'navbar', component: NavbarComponent}, 
];
