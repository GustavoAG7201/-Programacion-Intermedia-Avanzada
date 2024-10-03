import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



//!Subcomponentes de Content
import { InicioComponent } from './content/inicio/inicio.component';
import { ProductosComponent } from './content/productos/productos.component';
import { PromocionesComponent } from './content/promociones/promociones.component';
import { FavoritosComponent } from './content/favoritos/favoritos.component';
import { ComprasComponent } from './content/compras/compras.component';

//!Componentes para rutas
import { RouterModule, Routes } from '@angular/router'; 

//!Modulos de angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



//!Declaracion de rutas
const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'compras', component: ComprasComponent }
  ];

  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    PromocionesComponent,
    FavoritosComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    CarouselModule  ,
    
    
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
