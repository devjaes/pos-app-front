export class AppError extends Error {
  constructor(
    public message: string,
    public code: string,
    public status: number = 500,
    public details?: unknown
  ) {
    super(message)
    this.name = 'AppError'
  }
}
