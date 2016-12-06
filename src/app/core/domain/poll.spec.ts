import * as moment from 'moment';
import { poll } from "./poll";

describe('Poll', () => {
  const prompt = "Where should we go to dinner?";
  const options = [
    {
      "$key": "id-option-0",
      "text": "option 0",
      "image": "option0.png"
    },
    {
      "$key": "id-option-1",
      "text": "option 1",
      "image": "option1.png"
    },
    {
      "$key": "id-option-2",
      "text": "option 2",
      "image": "option2.png"
    },
    {
      "$key": "id-option-3",
      "text": "option 3",
      "image": "option3.png"
    },
  ];
  const id = "id-test-poll";
  const owner = "id-test-user";
  const created = moment().subtract(1, 'day');
  const updated = moment();

    it('factory function should return an instance given valid input', () => {
      let input = {
        prompt: prompt,
        options: options,
        $key: id,
        owner: owner,
        created: created,
        updated: updated
      };

      let it = poll(input);

      expect(it.prompt).toEqual(prompt);
      expect(it.id).toEqual(id);
      expect(it.owner).toEqual(owner);
      expect(it.created).toEqual(created);
      it.options.forEach((opt, idx)=> {
        expect(opt.id).toEqual(options[idx].$key);
        expect(opt.text).toEqual(options[idx].text);
      })

    });
});
