import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeadderComponent } from './headder/headder.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { CorideComponent } from './coride/coride.component';
import { DashboardsComponent } from './dashboards/dashboards.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadderComponent,FooterComponent,MainpageComponent,AboutComponent,CorideComponent,DashboardsComponent,CorideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uiux-port';
}
