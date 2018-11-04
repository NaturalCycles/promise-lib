import { pDelay } from './pDelay'
import { inRange, timeSpan } from './test/test.util'

test('delay', async () => {
  const end = timeSpan()
  await pDelay(100)
  expect(inRange(end(), 90, 160)).toBe(true)
})
