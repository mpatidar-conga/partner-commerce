import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './list/product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductDetailsResolver } from './services/product-details.resolver';
import { ConfigureGuard } from '../../services/configure.guard';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
  {
    path: 'category/:categoryName',
    component: ProductListComponent
  },
  {
    path: ':id/:cartItem',
    component: ProductDetailComponent,
    canDeactivate: [ConfigureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
