import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './host.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { TresorDetailsComponent } from 'src/app/components/tresor-details/tresor-details.component';
import { TresorlistComponent } from 'src/app/components/tresorlist/tresorlist.component';
import { FriendViewComponent } from 'src/app/components/friend-view/friend-view.component';

const routes: Routes = [
  {
    path: '', component: HostComponent, canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'friends', component: FriendViewComponent },
      {
        path: 'tresorlist', component: TresorlistComponent,
        children: [
          { path: 'create', component: TresorlistComponent },
          { path: 'edit/:id', component: TresorlistComponent },
          { path: 'delete/:id', component: TresorlistComponent },
          { path: 'view/:id', component: TresorlistComponent },
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
