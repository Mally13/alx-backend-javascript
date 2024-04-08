export default function returnHowManyArguments(...args) {
  let argc = 0;
  for (const arg in args) {
    if (arg !== undefined) {
      argc += ((parseInt(arg, 10) + 1) / (parseInt(arg, 10) + 1));
    }
  }
  return argc;
}
