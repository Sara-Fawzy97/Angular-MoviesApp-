import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModRoutingModule } from './shared-mod-routing.module';
import { ShortcutBarComponent } from '../shortcut-bar/shortcut-bar.component';
import { SkeltenLoadingComponent } from '../skelten-loading/skelten-loading.component';
import { SidebarComponent } from '../shows-shortcutBar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchedItemsComponent } from 'src/app/views/searched-items/searched-items.component';


@NgModule({
  declarations: [
    ShortcutBarComponent,
    SkeltenLoadingComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModRoutingModule, 
    FontAwesomeModule,
    NgxSkeletonLoaderModule.forRoot({animation:'pulse'}),
    ],
  exports: [
    SidebarComponent,
    SkeltenLoadingComponent,
    ShortcutBarComponent,
    FontAwesomeModule,
    NavbarComponent,
  ],
})
export class SharedModModule {}
