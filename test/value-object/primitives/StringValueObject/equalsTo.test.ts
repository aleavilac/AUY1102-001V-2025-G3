import FirstName from '../../../../test/value-object/primitives/StringValueObject/__mocks__/FirstName'
import { WordMother } from '../../../../test/mother-object/WordMother';

let name: string;

describe('StringValueObject', () => {
  beforeEach(() => {
    name = WordMother.random()
  })

  describe('equals to', () => {
    it(`should return "true" if the values are the same`, () => {
      const firstName = new FirstName(name)
      const expected = firstName.equalsTo(name);

      expect(expected).toBe(true);
    })

    it(`should return "false" if the values are not the same`, () => {
      const firstName = new FirstName(WordMother.random())
      const expected = firstName.equalsTo(name);

      expect(expected).toBe(false);
    })
  })
})
