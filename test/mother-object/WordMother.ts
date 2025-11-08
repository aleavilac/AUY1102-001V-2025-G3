import { MotherCreator } from './MotherCreator';

export class WordMother {
  static random(length = 5): string {
    return MotherCreator.random().lorem.word(length);
  }
}
