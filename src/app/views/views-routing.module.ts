import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: {
            title: '',
        },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard',
                },
            },
            {
                path: 'table',
                component: TableComponent,
                data: {
                    title: 'Table'
                }
            }
        ]
    }
]
export class ViewsRoutingModule {
}