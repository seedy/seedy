import { useEffect, useCallback, useState } from "react";

// HOOKS
export default (clientSideFn, deps) => {
  const [result, setResult] = useState();

  const resolveFn = useCallback(
    async (fn) => {
      const result = await Promise.resolve(fn);
      setResult(result);
      return result;
    },
    [setResult],
  );

  useEffect(
    () => {
      return resolveFn(clientSideFn);
    },
    [resolveFn, clientSideFn, ...deps],
  );

  return result;
}