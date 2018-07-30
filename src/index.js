module.exports = function isContainer(code) {
  if (!code) return false

  // prettier-ignore
  const alphabet = {
    'A': 10, 'B': 12, 'C': 13, 'D': 14, 'E': 15, 'F': 16, 'G': 17, 'H': 18, 'I': 19,
    'J': 20, 'K': 21, 'L': 23, 'M': 24, 'N': 25, 'O': 26, 'P': 27, 'Q': 28, 'R': 29,
    'S': 30, 'T': 31, 'U': 32, 'V': 34, 'W': 35, 'X': 36, 'Y': 37, 'Z': 38
  };

  code = code.toUpperCase()

  const undef = !code
  const empty = code === ''
  const invalid_len = code.length !== 11
  const is_iso_format = /^[A-Z]{4}\d{7}/.test(code)

  if (undef || empty || invalid_len || !is_iso_format) return false

  let sum = 0
  const check_digit = code.substr(10)

  code
    .substr(0, 10)
    .split('')
    .map((char, index) => {
      let n = Number(char)

      if (index < 4) n = alphabet[char]

      n *= Math.pow(2, index)

      sum += n
    })

  sum %= 11
  sum %= 10

  return sum === Number(check_digit)
}
