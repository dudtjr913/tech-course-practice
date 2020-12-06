export default function checkScope(valueEntry) {
  const scope = [];
  if (valueEntry[0].number !== undefined) {
    valueEntry.forEach((value) => scope.push(value.number));
    console.log(scope);
    return scope;
  }
  return valueEntry;
}
