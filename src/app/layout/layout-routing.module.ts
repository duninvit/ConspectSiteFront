import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {HomeModule} from './home/home.module';
import {PostModule} from './post/post.module';
import {UserDetailsModule} from './user-details/user-details.module';
import {UserEditModule} from './user-edit/user-edit.module';
import {AdminModule} from './admin/admin.module';
import {NewPostModule} from './new-post/new-post.module';
import {TagModule} from './tag/tag.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', loadChildren: () => HomeModule },
            { path: 'post/:id', loadChildren: () => PostModule },
            { path: 'newpost', loadChildren: () => NewPostModule },
            { path: 'user/:id', loadChildren: () => UserDetailsModule },
            { path: 'user-edit/:id', loadChildren: () => UserEditModule },
            { path: 'user-edit', loadChildren: () => UserEditModule },
            { path: 'admin', loadChildren: () => AdminModule },
            { path: 'tag/:tag', loadChildren: () => TagModule },
            /*{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },*/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
