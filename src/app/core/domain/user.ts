
import { setId } from "./index";
export interface User {
  /**
   * unique identifier for this user
   */
  id?: string;

  /**
   * display name for this user
   */
  name: string;

  /**
   * display image for this user
   */
  image: string;

  /**
   * whether or not the user has a verified account
   */
  isVerified: boolean;

  /**
   * simple index of polls this user has created:
   * key: poll id, val: (throwaway) boolean
   */
  polls?: {[id: string]: boolean}

  /**
   * index of votes this user has cast
   * key: id of poll vote was cast in
   * val: id of vote cast
   */
  votes?: {[id: string]: string}
}

export function user(it): User {
  let id, name, img;

  setId(it, 'User');

  if (!it.name){
    throw `Cannot create User without name: ${JSON.stringify(it)}`
  }

  if (!it.image){
    throw `Cannot create User without image: ${JSON.stringify(it)}`
  }

  return it as User;
}
