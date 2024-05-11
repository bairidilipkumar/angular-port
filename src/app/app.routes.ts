import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { CorideComponent } from './coride/coride.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"mainpage",component:MainpageComponent},
    {path:"about",component:AboutComponent},
    {path:"coride,",component:CorideComponent},
    {path:"dashboard",component:DashboardsComponent}
];
