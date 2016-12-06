

import { user } from "./user";



describe('User', () => {

  const id = 'id-test-user';
  const name = 'Test User';
  const image = 'testimg.pnh';

  it('factory function should return an instance given valid input', () => {

    let input = {
      $key: id,
      name: name,
      image: image
    };

    let it = user(input);

    expect(it.id).toEqual(id);
    expect(it.name).toEqual(name);
    expect(it.image).toEqual(image);

    let inputWithId = {
      id: id,
      name: name,
      image: image
    };

    expect(Object.assign(user(inputWithId), {$key:id})).toEqual(it, `User created with id field did not equal otherwise-identical user created with $key`);

  });

  it('factory function should throw when id and $key are both present and do not match', () => {

    let input = {
      $key: id,
      id: 'something-else',
      name: name,
      image: image
    };

    expect(()=>{user(input)}).toThrow(`$key and id both exist on object but do not match: ${JSON.stringify(input)}`);

  });


  it('factory function should throw when mandatory property is missing', () => {

    let noName = {
      id: id,
      image: image
    };

    let noId = {
      name: name,
      image: image
    };

    let noImg = {
      id: id,
      name: name
    };

    expect(()=>{user(noName)}).toThrow(`Cannot create User without name: ${JSON.stringify(noName)}`);
    expect(()=>{user(noId)}).toThrow(`Cannot create User without id: ${JSON.stringify(noId)}`);
    expect(()=>{user(noImg)}).toThrow(`Cannot create User without image: ${JSON.stringify(noImg)}`);

  });


});
