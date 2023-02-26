module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = new Map()
  bracketsConfig.forEach(element => {
    OPEN_BRACKETS.push(element[0])
    BRACKETS_PAIR.set(element[1], element[0])
  })
  let stack = []
  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];
    let topElement = stack[stack.length - 1] 
    if (BRACKETS_PAIR.get(currentSymbol) && BRACKETS_PAIR.has(currentSymbol) && topElement === currentSymbol) {
      stack.pop()
    }else if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
            return false
          }
      if (BRACKETS_PAIR.get(currentSymbol) === topElement) {
            stack.pop()
          } else {
            return false
          } 
    }
  }
  return stack.length === 0;
}