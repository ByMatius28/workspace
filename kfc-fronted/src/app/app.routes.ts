import { Routes } from '@angular/router';
import { MenuFormComponent } from './components/menu-form/menu-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menuformcomponent' },
  { path: 'menuformcomponent', component: MenuFormComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];