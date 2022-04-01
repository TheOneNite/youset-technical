export const formatCurrency = (amount) => {
  let cents = `${amount % 100}`
  let dollars = (amount - cents) / 100
  if (cents.length < 2) {
    cents = '0' + cents
  }
  return `$ ${dollars}.${cents}`
}

export const request = async (url, config) => {
  const res = await fetch(url, config)
  let body = await res.body
  return JSON.parse(body)
}
