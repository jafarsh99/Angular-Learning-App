import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableComponent } from './views/table/table.component';
import { AccordionComponent } from './views/accordion/accordion.component';
import { DarkmodeComponent } from './views/darkmode/darkmode.component';
import { InputCustomComponent } from './views/input-custom/input-custom.component';
import { UploadimgComponent } from './views/uploadimg/uploadimg.component';
import { ParentComponent } from './views/learn-komponen/parent/parent.component';
import { DragndropComponent } from './views/dragndrop/dragndrop/dragndrop.component';
import { RegexComponent } from './views/regex/regex.component';
import { LocalStorageComponent } from './views/local-storage/local-storage.component';
import { DisplayStorageComponent } from './views/local-storage/display-storage/display-storage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table',
        },
      },
      {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          title: 'Accordion',
        },
      },
      {
        path: 'darkmode',
        component: DarkmodeComponent,
        data: {
          title: 'Darkmode',
        },
      },
      {
        path: 'custom-prime',
        component: InputCustomComponent,
        data: {
          title: 'CustomPrime',
        },
      },
      {
        path: 'upload-img',
        component: UploadimgComponent,
        data: {
          title: 'UploadImg',
        },
      },
      {
        path: 'parent-child',
        component: ParentComponent,
        data: {
          title: 'Parent',
        },
      },
      {
        path: 'dragndrop',
        component: DragndropComponent,
        data: {
          title: 'DragNdroP',
        },
      },
      {
        path: 'regex',
        component: RegexComponent,
        data: {
          title: 'Regex',
        },
      },
      {
        path: 'localStorage',
        component: LocalStorageComponent,
        data: {
          title: 'localStorage',
        },
      },
      {
        path: 'displayStorage',
        component: DisplayStorageComponent,
        data: {
          title: 'displayStorage',
        },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
