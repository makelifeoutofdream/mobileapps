import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./expense/expense.module').then( m => m.ExpensePageModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'myteam',
    loadChildren: () => import('./myteam/myteam.module').then( m => m.MyteamPageModule)
  },
  {
    path: 'newclient',
    loadChildren: () => import('./newclient/newclient.module').then( m => m.NewclientPageModule)
  },
  {
    path: 'newinvoice',
    loadChildren: () => import('./newinvoice/newinvoice.module').then( m => m.NewinvoicePageModule)
  },
  {
    path: 'newexpense',
    loadChildren: () => import('./newexpense/newexpense.module').then( m => m.NewexpensePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'newinventory',
    loadChildren: () => import('./newinventory/newinventory.module').then( m => m.NewinventoryPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'printersettings',
    loadChildren: () => import('./printersettings/printersettings.module').then( m => m.PrintersettingsPageModule)
  },
  {
    path: 'editclient',
    loadChildren: () => import('./editclient/editclient.module').then( m => m.EditclientPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
