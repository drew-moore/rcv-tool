import {Moment} from "moment";
import { setId } from "./index";


export interface PollOption {
  /**
   * unique identifier for this object
   */
  id?: string;

  /**
   * the name or brief definition of this option
   */
  text: string;

  /**
   * the image attached to this option, used to represent it where displaying its full text is not feasible
   */
  image: string;
}

export interface Poll {
  /**
   * unique identifier for this poll
   */
  id?: string;

  /**
   * the question the poll is asking
   */
  prompt: string;

  /***
   * the potential answers being ranked in this poll
   */
  options: PollOption[];

  /**
   * the id of the user who created this poll
   */
  owner: string;

  /**
   * when the poll was created (for sorting purposes)
   */
  created: Moment;

  /**
   *  when the poll was last updated (for sorting purposes)
   */
  updated: Moment;
}

export function pollOption(input:any): PollOption {
  setId(input, 'pollOption');
  if (!input.text){
    throw `Cannot create PollOption without text: ${JSON.stringify(input)}`;
  }
  if (!input.image){
    throw `Cannot create PollOption without image: ${JSON.stringify(input)}`;
  }

  return input as PollOption;
}

export function poll(input:any): Poll {

  setId(input, 'Poll');

  if (!input.options){
    throw `Cannot create Poll without options: ${JSON.stringify(input)}`;
  } else {
    input.options = input.options.map(opt => pollOption(opt));
  }

  //TODO other checks

  //TODO allow created/updated to be input as strings and return them as moments

  return input as Poll;

}
