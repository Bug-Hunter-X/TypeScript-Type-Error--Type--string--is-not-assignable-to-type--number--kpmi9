function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'Error: Inputs must be numbers';
  }
}

let result1 = addSafe(5, 10); // Returns 15
let result2 = addSafe(5, '10'); // Returns 'Error: Inputs must be numbers' 
let result3 = addSafe('5',10); // Returns 'Error: Inputs must be numbers'
let result4 = add(5, 10); // Returns 15