import m from '../src'

describe('Test cases', () => {
  test.each`
    container           | expected
    ${'MSKU6011672'}    | ${true}
    ${'msku6011672'}    | ${true}
    ${'6011672msku'}    | ${false}
    ${'INXU6011677'}    | ${false}
    ${'00000000000'}    | ${false}
    ${''}               | ${false}
    ${'MS KU 601 1672'} | ${false}
    ${null}             | ${false}
    ${undefined}        | ${false}
  `('returns $expected for $container', ({ container, expected }) => {
    expect(m(container)).toBe(expected)
  })

  test('throw TypeError for non-string values', () => {
    expect(() => m(true as any)).toThrow(TypeError)
    expect(() => m(/^[A-Z]/ as any)).toThrow(TypeError)
    expect(() => m(12345678900 as any)).toThrow(TypeError)
  })
})
