import uuid from 'uuid';

export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== 'number';
  });

  if (somethingNotNumber) {
    throw new Error('I want numbers');
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const argNotNum = numbers.some(number => {
    return typeof number !== 'number';
  });

  if (argNotNum) {
    throw new Error('numbers required');
  }
  return numbers.reduce((acc, currentNumber) => {
    return acc * currentNumber;
  });
}

export function personMaker(name, age) {
  return {
    id: uuid(),
    name,
    age,
  };
}

// BUILD YOUR OWN UTILITY FUNCTIONS AND TEST THEM OUT!