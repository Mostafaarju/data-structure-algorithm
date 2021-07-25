class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  add(key, value) {
    this.dictionary[key] = value;
  }
  get(key) {
    return this.dictionary[key];
  }
}

const phoneBook = new Dictionary();
phoneBook.add('Raju', '017204495855');
phoneBook.add('Talukder', '0172045458');
phoneBook.add('Al Amin', '0172044434');

console.log(phoneBook.dictionary);

const Al_Amin = phoneBook.get('Al Amin');
console.log(Al_Amin);
