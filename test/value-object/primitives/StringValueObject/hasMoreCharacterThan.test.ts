import FirstName from '../../../value-object/primitives/StringValueObject/__mocks__/FirstName'
import { WordMother } from '../../../mother-object/WordMother';

let firstName: FirstName;

describe('StringValueObject', () => {
  beforeEach(() => {
    firstName = new FirstName(WordMother.random(10));
  })

  describe('has more character than', () => {
    it(`should return "true" if the "firstName" have more of five characters`, () => {
      const expected = firstName.hasMoreCharacterThan(5)

      expect(expected).toBe(true);
    })

    it(`should return "false" if the "firstName" have more of thirty characters`, () => {
      const expected = firstName.hasMoreCharacterThan()

      expect(expected).toBe(false);
    })
  })
})
