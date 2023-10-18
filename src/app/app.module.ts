import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { InputFindByCityComponent } from './components/shared/input-find-by-city/input-find-by-city.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { PostComponent } from './components/pages/post/post.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EditComponent } from './components/pages/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InputFindByCityComponent,
    ListPageComponent,
    PostComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
