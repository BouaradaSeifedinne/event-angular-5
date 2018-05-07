import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './home/container/feed/feed.component';
import { ContactComponent } from './home/container/contact/contact.component';
import { ProfileComponent } from './home/container/profile/profile.component';

const addRoutes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      addRoutes, 
      {enableTracing: true}
    ),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutes { }
