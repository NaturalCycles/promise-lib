/**
 * Error that aggregates a number of other errors.
 * .message contains concatenated error _messages_ (no stacks).
 * .errors contain raw original errors to be accessed if needed.
 */
export class AggregatedError extends Error {
  errors!: Error[]

  constructor (errors: (Error | string)[]) {
    const mappedErrors = errors.map(e => {
      if (typeof e === 'string') return new Error(e)
      return e
    })

    const message = [
      `${errors.length} errors:`,
      ...mappedErrors.map((e, i) => `${i + 1}. ${e.message}`),
    ].join('\n')

    super(message)

    this.errors = mappedErrors

    this.constructor = AggregatedError
    ;(this as any).__proto__ = AggregatedError.prototype
    Object.defineProperty(this, 'name', {
      value: this.constructor.name,
      configurable: true,
    })

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    } else {
      Object.defineProperty(this, 'stack', {
        value: new Error().stack,
      })
    }
  }
}
