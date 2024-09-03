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

test('12345.678 保留三位小数 = 12345.678', () => {
  expect(formatNumber(12345.678, { format: 'origin', precision: 3 })).toBe('12345.678')
})

test('0 作为百分比，无精度设置 = 0%', () => {
  expect(formatNumber(0, { format: 'percent' })).toBe('0%')
})

test('1 作为百分比，保留一位小数 = 100.0%', () => {
  expect(formatNumber(1, { format: 'percent', precision: 1 })).toBe('100.0%')
})

test('1234567.8 仅保留整数，不转换为千分位 = 1234568', () => {
  expect(formatNumber(1234567.8, { format: 'int' })).toBe('1234568')
})

test('0.1234 作为货币，不指定精度，默认应为两位小数 = 0.123', () => {
  expect(formatNumber(0.1234, { format: 'money' })).toBe('0.123')
})

test('1234567.89 作为货币，四位小数 = 1,234,567.8900', () => {
  expect(formatNumber(1234567.89, { format: 'money', precision: 4 })).toBe('1,234,567.8900')
})

test('非常大的数1e+20，作为货币处理 = 100,000,000,000,000,000,000.00', () => {
  expect(formatNumber(1e+20, { format: 'money', precision: 2 })).toBe('100,000,000,000,000,000,000.00')
})