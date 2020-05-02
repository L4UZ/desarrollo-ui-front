import { books } from '../data';

class Book {
  static all() {
    return books;
  }
}

module.exports = {
  Book,
};
