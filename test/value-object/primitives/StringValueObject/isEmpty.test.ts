import FirstName from '../../../value-object/primitives/StringValueObject/__mocks__/FirstName'
import { WordMother } from '../../../mother-object/WordMother';

describe('StringValueObject', () => {
  describe('is empty', () => {
    it(`should return "true" if the "firstName" are empty`, () => {
      const firstName = new FirstName(WordMother.random(0))
      const expected = firstName.isEmpty()

      expect(expected).toBe(true);
    })

    it(`should return "false" if the "firstName" are empty`, () => {
      const firstName = new FirstName(WordMother.random())
      const expected = firstName.isEmpty()

      expect(expected).toBe(false);
    })
  })
})
