import { useEffect, useCallback, useState } from 'react';

// HOOKS
const useClientSide = (clientSideFn) => {
  const [result, setResult] = useState();

  const resolveFn = useCallback(
    async (fn) => {
      const resolved = await Promise.resolve(fn);
      setResult(resolved);
      return resolved;
    },
    [setResult],
  );

  useEffect(
    () => {
      resolveFn(clientSideFn);
    },
    [resolveFn, clientSideFn],
  );

  return result;
};

export default useClientSide;
