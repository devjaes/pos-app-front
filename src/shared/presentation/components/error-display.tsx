import { AppError } from '@/shared/domain/app-error'

interface ErrorDisplayProps {
  error: AppError
  onRetry: () => void
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onRetry,
}: ErrorDisplayProps) => (
  <div className="error-container">
    <h2>An error occurred</h2>
    <p>Error: {error.message}</p>
    <p>Code: {error.code}</p>
    {error.details != null && (
      <details>
        <summary>Error Details</summary>
        <pre>{JSON.stringify(error.details, null, 2)}</pre>
      </details>
    )}
    <button onClick={onRetry}>Retry</button>
  </div>
)
