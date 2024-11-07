import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './content/inicio/inicio.component';
import { ProductosComponent } from './content/productos/productos.component';
import { PromocionesComponent} from './content/promociones/promociones.component';
import { FavoritosComponent } from './content/favoritos/favoritos.component';
import { ComprasComponent } from './content/compras/compras.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'promociones', component: PromocionesComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'compras', component: ComprasComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
