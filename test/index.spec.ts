import m from '../src'
import fc from 'fast-check'

describe('Unit', () => {
  test.each`
    container           | expected
    ${'MSKU6011672'}    | ${true}
    ${'msku6011672'}    | ${true}
    ${'6011672msku'}    | ${false}
    ${'INXU6011677'}    | ${false}
    ${'00000000000'}    | ${false}
    ${'MS KU 601 1672'} | ${false}
    ${''}               | ${false}
    ${null}             | ${false}
    ${undefined}        | ${false}
    ${true}             | ${false}
    ${12345678900}      | ${false}
    ${/^[A-Z]/}         | ${false}
  `('returns $expected for $container', ({ container, expected }) => {
    expect(m(container)).toBe(expected)
  })
})

describe('Property', () => {
  it('returns false for fuzzy inputs', () => {
    const arbitraries = fc.oneof(
      fc.string(),
      fc.unicodeString(),
      fc.asciiString(),
    )

    const property = fc.property(arbitraries, input => {
      return m(input) === false
    })

    fc.assert(property, { numRuns: 500, verbose: true })
  })
})
