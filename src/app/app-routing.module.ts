import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { PostComponent } from './components/pages/post/post.component';
import { EditComponent } from './components/pages/edit/edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'post', component: PostComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
