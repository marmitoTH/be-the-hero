const formatCurrency = (value: number) => {
  if (typeof (value) == 'string') {
    value = parseFloat(value)
  }

  return String(`R$ ${value.toFixed(2)}`)
}

export default formatCurrency
