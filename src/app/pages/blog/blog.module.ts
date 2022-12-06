import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { UIModule } from '../../shared/ui/ui.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogRoutingModule } from './blog-routing.module';
import { FormsModule } from '@angular/forms';

import { BloglistComponent } from '../blog/bloglist/bloglist.component';
import { BloggridComponent } from '../blog/bloggrid/bloggrid.component';
import { DetailComponent } from '../blog/detail/detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [BloglistComponent, BloggridComponent, DetailComponent],
    imports: [
        FormsModule,
        NgxPaginationModule,
        
        CommonModule,
        BlogRoutingModule,
        NgbNavModule,
        NgbTooltipModule,
        UIModule,
        Ng2SearchPipeModule
    ]
})

export class BlogModule { }
