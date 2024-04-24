import { useState } from 'react';

type CounterProps = {
  initialCount?: number;
};

export const Counter = ({ initialCount = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => ++count)}>Increment</button>
    </>
  );
};
