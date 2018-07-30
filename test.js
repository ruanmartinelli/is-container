import m from './'
import test from 'ava'

const cases = {
  MSKU6011672: true,
  msku6011672: true,
  '6011672msku': false,
  INXU6011677: false,
  '00000000000': false,
  '': false,
  'MS  KU   601 1672': false
};

for (let c of Object.keys(cases)) {
  test(`case '${c}' should return ${cases[c]}`, t => {
    const result = m(c);
    const expected = cases[c];

    t.is(result, expected);
  });
}

test('should return false if no container number is given', t => {
  t.false(m());
});
