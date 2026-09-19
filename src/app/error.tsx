"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <Icon name="sparkles" size={28} />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-foreground-muted">
        An unexpected error occurred. Please try again or contact us if the
        problem persists.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="btn btn-primary"
        >
          Try again
        </button>
        <Link href="/" className="btn btn-outline">
          <Icon name="arrow-narrow-right" size={16} className="rotate-180" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
