const addOne = function (a) {
  return a + 1
}

// Test 1
test('인수가 숫자인 경우', () => {
  // expect()의 인수 결과가 .toBe()의 인수 값이 되길 기대합니다.
  expect(addOne(1)).toBe(2)
  expect(addOne(7)).toBe(8)
})

// Test 2
test('인수가 문자인 경우', () => {
  expect(addOne('1')).toBe('11')
  expect(addOne('7')).toBe('71')
})