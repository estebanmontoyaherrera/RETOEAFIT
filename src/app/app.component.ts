import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { RegisterComponent } from "./register/register.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HeroComponent, RegisterComponent, AdminPanelComponent, FooterComponent]
})
export class AppComponent {
  title = 'EstraMyPyme';
}
