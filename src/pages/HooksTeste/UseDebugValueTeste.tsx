import React, { useDebugValue, useEffect, useState } from 'react'

/*
  useDebugValue pode ser usado para exibir um label em um custom hook em React DevTools.
*/

function useFriendStatus(isOnlineValue: boolean) {
  const [isOnline, setIsOnline] = useState<boolean>();
  useEffect(() => {
    setIsOnline(isOnlineValue);
  }, [isOnlineValue])
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

export default function UseDebugValueTeste() {
  const friendStatus = useFriendStatus(true);

  return (
    <div>
      <h1>UseDebugValueTeste</h1>
      <h2>{friendStatus}</h2>
    </div>
  )
}

/*
  useLayoutEffect dispara na mesma fase que componentDidMount e componentDidUpdate
*/