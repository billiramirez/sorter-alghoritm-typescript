import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

console.log(
  "===================NUMBER COLLECTION=============================="
);
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 1000]);
numbersCollection.sort();
console.log(numbersCollection.data);

console.log(
  "===================CHARACTER COLLECTION=============================="
);
const charactersCollection = new CharactersCollection("Xaayb");

charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
console.log(
  "===================LINKED LIST COLLECTION=============================="
);
linkedList.print();
