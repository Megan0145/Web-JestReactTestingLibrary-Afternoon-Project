import uuid from "uuid";

export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== "number";
  });

  if (somethingNotNumber) {
    throw new Error("I want numbers");
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const argNotNum = numbers.some(number => {
    return typeof number !== "number";
  });

  if (argNotNum) {
    throw new Error("numbers required");
  }
  return numbers.reduce((acc, currentNumber) => {
    return acc * currentNumber;
  });
}

export function personMaker(name, age) {
  const nameIsString = name => typeof name == "string";
  const ageIsNumber = age => typeof age == "number";
  const over18 = age > 18;
  if (!nameIsString(name)) {
    throw new Error("Name should be string");
  } else if (!ageIsNumber(age)) {
    throw new Error("Age should be a number");
  } else if (over18){
    return {
      id: uuid(),
      name,
      age
    };
  } throw new Error('Must be over 18');
}

// BUILD YOUR OWN UTILITY FUNCTIONS AND TEST THEM OUT!
