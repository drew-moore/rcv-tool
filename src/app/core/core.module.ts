import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from "./services/user.service";
import { PollService } from "./services/poll.service";
import { VoteService } from "./services/vote.service";

@NgModule({
  providers: [UserService, PollService, VoteService]
})
export class CoreModule { }
