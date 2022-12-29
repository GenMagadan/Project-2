import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFiveComponent } from './pages/page-five/page-five.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
  },
  {
    path: 'page-1',
    component: PageOneComponent,
  },
  {
    path: 'page-2',
    component: PageTwoComponent,
  },
  {
    path: 'page-3',
    component: PageThreeComponent,
  },
  {
    path: 'page-4',
    component: PageFourComponent,
  },
  {
    path: 'page-5',
    component: PageFiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
