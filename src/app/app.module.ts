import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events.app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.services';



@NgModule({
  imports: [
BrowserModule
    ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent

  ],
  providers: [
    EventService,
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }
