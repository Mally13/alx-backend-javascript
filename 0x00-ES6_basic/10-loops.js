export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const array2 = [];

  for (const arr of array) {
    array2[i] = appendString + arr;
    i += 1;
  }

  return array2;
}
