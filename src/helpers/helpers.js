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
  const nameIsString = () => typeof name == 'string';
  if (nameIsString(name)){
  return {
    id: uuid(),
    name,
    age,
  }} throw new Error('Name should be string');
}

// BUILD YOUR OWN UTILITY FUNCTIONS AND TEST THEM OUT!