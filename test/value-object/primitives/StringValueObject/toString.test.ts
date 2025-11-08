import FirstName from '../../../value-object/primitives/StringValueObject/__mocks__/FirstName'
import { WordMother } from '../../../mother-object/WordMother';

let firstName: FirstName;
let name: string;

describe('StringValueObject', () => {
  beforeEach(() => {
    name = WordMother.random()
    firstName = new FirstName(name);
  })

  describe('to string', () => {
    it(`should return "true" if the "${name}" are empty`, () => {
      const expected = firstName.toString();

      expect(expected).toBe(name);
    })
  })
})
