import { NgModule } from "@angular/core";
import { FirebaseModule } from "../firebase";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AuthService } from "./services/auth/auth.service";
import { UserService } from "./services/user/user.service";
import { PollService } from "./services/poll/poll.service";
import { VoteService } from "./services/vote/vote.service";
import { coreReducers } from "./core.state";

@NgModule({
  imports: [
    FirebaseModule,
    StoreModule.provideStore(coreReducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ UserService, PollService, VoteService, AuthService ]
})
export class CoreModule {
}
