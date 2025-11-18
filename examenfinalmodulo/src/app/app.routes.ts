import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { MarcasComponent } from './components/marcas.component/marcas.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { PedidosComponent } from './components/pedidos.component/pedidos.component';
import { ComprasComponent } from './components/compras.component/compras.component';

export const routes: Routes = [
    {
        path: '',component:HomeComponent
    }
    ,
    {
        path: 'marcas/:marca',component:MarcasComponent
    }
    ,
    {
        path: 'login',component:LoginComponent
    }
    ,
    {
        path: 'perfil',component:PerfilComponent,


    }
    ,
    {
        path: 'compras',component:ComprasComponent
    }
    ,
    {
        path: 'pedidos',component:PedidosComponent
    }
    
];
