export * from './poll';
export * from './user';
export * from './vote';

export function setId(it:any, type:string){
  if (it.$key){
    if (it.id){
      if (it.id !== it.$key){
        throw `$key and id both exist on object but do not match: ${JSON.stringify(it)}`;
      }
    } else {
      it.id = it.$key;
    }
  } else if (!it.id){
    throw `Cannot create ${type} without id: ${JSON.stringify(it)}`
  }
}
