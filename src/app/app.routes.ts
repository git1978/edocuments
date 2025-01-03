import {Routes} from "@angular/router";

export const appRoutes: Routes = [
    {
        path: 'edoc',
        loadChildren: () => import('./edocument/filter/filter.routes').then(m => m.filterHomeRoutes)
    },
    {
        path: '',
        loadChildren: () => import('./xxx-home/xxx-home.routes').then(m => m.xxxHomeRoutes)
    },
    {
        path: 'user',
        loadChildren: () => import('./xxx-user/xxx-user.routes').then(m => m.xxxUserRoutes)
    },
    {
        path: 'post',
        loadChildren: () => import('./xxx-post/xxx-post.routes').then(m => m.xxxPostRoutes)
    }
];
