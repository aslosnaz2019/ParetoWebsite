export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="currentColor" />
      <rect x="6.3" y="9.7" width="2.6" height="8.2" fill="#101A38" />
      <circle cx="7.6" cy="6.4" r="1.6" fill="#101A38" />
      <path
        d="M11.6 9.7H14.1V11C14.6 10.1 15.7 9.4 17 9.4C19.3 9.4 20 10.7 20 13V17.9H17.4V13.5C17.4 12.3 17 11.5 15.9 11.5C15 11.5 14.4 12.1 14.2 12.7C14.1 12.9 14.1 13.2 14.1 13.5V17.9H11.6V9.7Z"
        fill="#101A38"
      />
    </svg>
  );
}
