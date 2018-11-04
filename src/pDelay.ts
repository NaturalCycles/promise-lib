export async function pDelay (ms: number): Promise<void> {
  return new Promise<void>(r => setTimeout(r, ms))
}
