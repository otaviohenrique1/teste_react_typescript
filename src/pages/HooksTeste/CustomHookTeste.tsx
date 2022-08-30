import { useRef, useState } from 'react'

export function CustomHookTeste() {
  return (
    <div>
      <h1>
        CustomHookTeste</h1>
    </div>
  );
}

export function useLoading() {
  const [isLoading, setState] = useState(false);

  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };

  return [isLoading, load] as const;
}

function tuplify<T extends any[]>(...elements: T) {
  return elements;
}

export function useArray() {
  const numberValue = useRef(3).current;
  const functionValue = useRef(() => {}).current;
  return [numberValue, functionValue]; // type is (number | (() => void))[]
}

export function useTuple() {
  const numberValue = useRef(3).current;
  const functionValue = useRef(() => {}).current;
  return tuplify(numberValue, functionValue); // type is [number, () => void]
}
