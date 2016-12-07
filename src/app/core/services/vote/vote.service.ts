import { Injectable } from "@angular/core";
import { AngularFire } from "angularfire2";

@Injectable()
export class VoteService {

  constructor(private fire: AngularFire) { }

}
