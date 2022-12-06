import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { BloggridComponent } from './bloggrid/bloggrid.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
    {
        path: 'list',
        component: BloglistComponent
    },
    {
        path: 'grid',
        component: BloggridComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
