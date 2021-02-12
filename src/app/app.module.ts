import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
