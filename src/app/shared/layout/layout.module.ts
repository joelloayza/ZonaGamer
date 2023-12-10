import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
