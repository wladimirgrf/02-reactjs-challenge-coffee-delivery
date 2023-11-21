export function formatCurrency(value: number) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return USDollar.format(value).replace('$', '')
}
