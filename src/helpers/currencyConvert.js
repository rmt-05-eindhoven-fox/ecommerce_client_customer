function currencyConvert (value) {
  let valueStr = value.toString()
  valueStr = valueStr.split('').reverse()
  const output = []
  for (let i = 0; i < valueStr.length; i++) {
    if (i % 3 === 0 && i > 0) {
      output.unshift('.')
    }
    output.unshift(valueStr[i])
  }
  return `Rp. ${output.join('')}`
}

module.exports = currencyConvert
