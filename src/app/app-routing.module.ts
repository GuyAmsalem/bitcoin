import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contacts/edit/:id', component: ContactEditComponent },
  { path: 'contacts/edit', component: ContactEditComponent },
  { path: 'statistics', component: StatisticPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
