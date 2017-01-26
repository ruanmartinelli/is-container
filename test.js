const m = require('./')
const test = require('ava')

test('work for MSKU6011672', t => t.is (m('MSKU6011672'), true ))

test('work for container numbers with spaces', t => t.is (m('MS  KU   601 1672'), true ))

test('work for container numbers with lowercase letters', t => t.is (m('msku6011672'), true ))

test('return false if position of letters and numbers are switched', t => t.is (m('6011672msku'), false ))

test('return false for invalid container numbers (INXU6011677)', t => t.is (m('INXU6011677'), false ))

test('return false if everything is zero', t => t.is (m('00000000000'), false ))

test('return false for empty strings', t => t.is (m(''), false ))

test('return false if no container number is given', t => t.is (m(), false ))