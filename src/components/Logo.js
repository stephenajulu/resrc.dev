import React from 'react';

export default function Logo({ size, ...otherProps }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      {...otherProps}
    >
      <path fill="#E5E5E5" d="M0 0h100v100H0z" />
      <path fill="#111" d="M0 0h100v100H0z" />
      <path
        d="M59.9 59c0 2.6-.7 4.7-2.1 6.3-1.367 1.6-3.4 2.633-6.1 3.1l9 13.05h-5.1L47.45 68.6h-5.5v12.85H38V50h10.95c3.533 0 6.233.85 8.1 2.55 1.9 1.7 2.85 3.85 2.85 6.45zm-11.25 6.85c2.367 0 4.15-.567 5.35-1.7 1.233-1.167 1.85-2.683 1.85-4.55 0-1.9-.6-3.4-1.8-4.5-1.167-1.133-2.867-1.7-5.1-1.7h-7v12.45h6.7zM35.9 26c0 2.6-.7 4.7-2.1 6.3-1.367 1.6-3.4 2.633-6.1 3.1l9 13.05h-5.1L23.45 35.6h-5.5v12.85H14V17h10.95c3.533 0 6.233.85 8.1 2.55 1.9 1.7 2.85 3.85 2.85 6.45zm-11.25 6.85c2.367 0 4.15-.567 5.35-1.7 1.233-1.167 1.85-2.683 1.85-4.55 0-1.9-.6-3.4-1.8-4.5-1.167-1.133-2.867-1.7-5.1-1.7h-7v12.45h6.7zM31.35 57.2c-.567-3.067-2.817-4.6-6.75-4.6-2.1 0-3.717.467-4.85 1.4-1.133.9-1.7 2-1.7 3.3 0 1.267.35 2.233 1.05 2.9.7.667 1.833 1.25 3.4 1.75l6.55 2.25c2.233.767 4 1.817 5.3 3.15 1.333 1.333 2 3.217 2 5.65 0 2.4-1.033 4.433-3.1 6.1-2.067 1.633-4.833 2.45-8.3 2.45-3.467 0-6.317-.867-8.55-2.6-2.2-1.767-3.333-4.233-3.4-7.4h3.85c0 2.067.717 3.65 2.15 4.75 1.467 1.1 3.333 1.65 5.6 1.65 2.3 0 4.117-.5 5.45-1.5 1.333-1.033 2-2.233 2-3.6 0-1.4-.417-2.5-1.25-3.3-.8-.8-2-1.467-3.6-2l-5.55-2.05c-2.6-.867-4.567-1.9-5.9-3.1-1.333-1.2-2-2.95-2-5.25 0-2.333.933-4.267 2.8-5.8C18.417 49.783 21.033 49 24.4 49s5.933.75 7.7 2.25c1.8 1.467 2.833 3.45 3.1 5.95h-3.85zM74.4 50c3.367 0 6.067.85 8.1 2.55 2.067 1.667 3.483 3.85 4.25 6.55l-4.25.85c-.667-1.967-1.717-3.517-3.15-4.65-1.4-1.167-3.05-1.75-4.95-1.75-2.633 0-4.817 1.1-6.55 3.3-1.733 2.2-2.6 5.267-2.6 9.2 0 3.9.767 7.033 2.3 9.4C69.117 77.817 71.4 79 74.4 79c2.5 0 4.467-.65 5.9-1.95 1.467-1.333 2.2-3.083 2.2-5.25h4.25c0 3.3-1.133 5.917-3.4 7.85-2.233 1.933-5.317 2.9-9.25 2.9-3.9 0-7.067-1.5-9.5-4.5-2.4-3-3.6-7.017-3.6-12.05s1.25-8.95 3.75-11.75c2.5-2.833 5.717-4.25 9.65-4.25zM38 17h19.35v3.4h-15.4v10.55h14.5v3.35h-14.5V45h15.4v3.45H38V17z"
        fill="#ECECEC"
      />
    </svg>
  );
}

Logo.defaultProps = {
  size: 100,
};
