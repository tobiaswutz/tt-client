import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HostComponent, canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'portfolios', component: PortfolioComponent,
        children: [
          { path: 'create', component: PortfolioComponent },
          { path: 'edit/:id', component: PortfolioComponent },
          { path: 'delete/:id', component: PortfolioComponent },
          { path: 'view/:id', component: PortfolioComponent },
        ]
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
