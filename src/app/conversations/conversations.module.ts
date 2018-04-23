import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationDirective } from './conversation-list/conversation.directive';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    ConversationsRoutingModule,
    NgPipesModule
  ],
  declarations: [ConversationListComponent, ConversationDirective]
})
export class ConversationsModule { }
