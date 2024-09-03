import { expect, test } from 'vitest'
import { formatNumber } from './index'

test('1234567.8 保留两位小数+千分位=1,234,567.80', () => {
  expect(formatNumber(1234567.8, { format: 'money', precision: 2 })).toBe('1,234,567.80')
})

test('1234567.89 取整 = 1234568', () => {
  expect(formatNumber(1234567.89, { format: 'int' })).toBe('1234568')
})

test('0.123 以百分比显示 保留两位小数 = 12.30%', () => {
  expect(formatNumber(0.123, { format: 'percent', precision: 2 })).toBe('12.30%')
})