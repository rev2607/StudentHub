import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("UI Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto p-4 text-red-700">
          <h2 className="text-lg font-semibold">Something went wrong.</h2>
          <pre className="mt-2 whitespace-pre-wrap text-sm bg-red-50 p-2 rounded">{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}


