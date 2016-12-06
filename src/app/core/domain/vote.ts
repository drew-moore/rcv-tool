import {Moment} from "moment";

export interface Vote {
  /**
   * unique identifier for this vote
   */
  id?: string;

  /**
   * The choices the user, where each choice is represented by the uid of the PollOption object
   */
  choices: {rank: number; choice: string;}[];


  /**
   * the id of the poll the vote was cast in
   */
  pollId: string;

  /**
   * the id of the voter who cast the vote. Note: If the vote was cast privately, this value will be null
   */
  voterId: string|null;

  /**
   * the time the vote was cast
   */
  created: Moment;

}

