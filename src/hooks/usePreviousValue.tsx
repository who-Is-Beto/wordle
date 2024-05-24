import { useEffect, useRef } from "react";

const usePreviousValue: <T>(value: T) => T = (value) => {
  const ref: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePreviousValue;
