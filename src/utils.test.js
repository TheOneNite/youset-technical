import { formatCurrency } from './utils'

describe('currency formatter tests', () => {
  it('should format standard amount $ dd.cc', () => {
    const txt = formatCurrency(1234)
    expect(txt).toBe('$ 12.34')
  })
  it('should handle amounts with < 10 cents, display as 09', () => {
    const txt = formatCurrency(1203)
    expect(txt).toBe('$ 12.03')
  })
  it('should display whole dollar amounts as .00', () => {
    const txt = formatCurrency(1200)
    expect(txt).toBe('$ 12.00')
  })
})
