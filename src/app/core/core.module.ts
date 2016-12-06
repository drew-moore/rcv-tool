import { NgModule } from '@angular/core';
import { UserService } from "./services/user.service";
import { PollService } from "./services/poll.service";
import { VoteService } from "./services/vote.service";
import { FirebaseModule } from "../firebase";

@NgModule({
  imports: [FirebaseModule],
  providers: [UserService, PollService, VoteService]
})
export class CoreModule { }
