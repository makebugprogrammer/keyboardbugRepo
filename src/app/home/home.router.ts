import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'feed',
                loadChildren: () => import('../pages/feed/feed.module').then(
                    m => m.FeedPageModule
                )
            },
            {
                path: 'noctifications',
                loadChildren: () => import('../pages/noctifications/noctifications.module').then(
                    m => m.NoctificationsPageModule)
            },
            {
                path: 'messages',
                loadChildren: () => import('../pages/messages/messages.module').then(
                    m => m.MessagesPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('../pages/settings/settings.module').then(
                    m => m.SettingsPageModule)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter { }