import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

function logErrorToMyService(error: Error, info: ErrorInfo) {
  console.error('Error', error, info);

}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Обновляем состояние, чтобы показать fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Логируем ошибку в сервис
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Упс. Произошла ошибка.</h1>;
    }

    return this.props.children;
  }
}