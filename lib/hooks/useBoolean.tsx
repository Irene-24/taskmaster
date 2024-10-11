import { useState, useCallback } from "react";

function useBoolean(initialValue: boolean = false) {
  const [state, setState] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  const setValue = useCallback((value: boolean) => setState(value), []);

  return {
    state,
    setTrue,
    setFalse,
    toggle,
    setValue,
  };
}

export default useBoolean;
