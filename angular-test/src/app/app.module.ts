import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from './pipe/youtube.pipe';
import {DomSanitizer} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      { path :'index',component: IndexComponent},
      { path: '', redirectTo: '/index', pathMatch: 'full' },
      
      
])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
