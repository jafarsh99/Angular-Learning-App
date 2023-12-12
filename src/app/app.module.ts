import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  CardModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CarouselModule } from '@coreui/angular';
import { ModalModule } from '@coreui/angular';
import { TableComponent } from './views/table/table.component';
import { TableModule } from 'primeng/table';
import { Routes } from '@angular/router';
import { BtnNavComponent } from './views/btn-nav/btn-nav.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AccordionComponent } from './views/accordion/accordion.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DarkmodeComponent } from './views/darkmode/darkmode.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputCustomComponent } from './views/input-custom/input-custom.component';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CheckboxModule} from 'primeng/checkbox';
import { UploadimgComponent } from './views/uploadimg/uploadimg.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { LookupCheckedTabelComponent } from './views/lookup/lookup-checked-tabel/lookup-checked-tabel.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ParentComponent } from './views/learn-komponen/parent/parent.component';
import { ChildSatuComponent } from './views/learn-komponen/child-satu/child-satu.component';
import { ChildDuaComponent } from './views/learn-komponen/child-dua/child-dua.component';
import { ChildTigaComponent } from './views/learn-komponen/child-tiga/child-tiga.component';
import { LookupDataComponent } from './views/learn-komponen/lookup/lookup-data/lookup-data.component';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    TableComponent,
    AccordionComponent,
    BtnNavComponent,
    DarkmodeComponent,
    InputCustomComponent,
    UploadimgComponent,
    LookupCheckedTabelComponent,
    ParentComponent,
    ChildSatuComponent,
    ChildDuaComponent,
    ChildTigaComponent,
    LookupDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    CarouselModule,
    ModalModule,
    FormsModule,
    TableModule,
    AccordionModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    RadioButtonModule,
    SelectButtonModule,
    DropdownModule,
    PanelModule,
    FieldsetModule,
    CalendarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    CheckboxModule,
    FileUploadModule,
    ToolbarModule,
    DynamicDialogModule,
  ],
  exports: [BtnNavComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    Title,
    ConfirmationService,
    DialogService,
  ], 
  bootstrap: [AppComponent],
})
export class AppModule {}
