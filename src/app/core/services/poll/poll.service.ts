import { Injectable } from "@angular/core";
import { AngularFire } from "angularfire2";

@Injectable()
export class PollService {

  constructor(private fire: AngularFire) { }

}
