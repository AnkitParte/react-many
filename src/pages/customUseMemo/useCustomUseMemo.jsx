import { useEffect, useRef } from "react"

const checkDeps = (prevDep, newDep) => {
  if (prevDep == null) return true
  if (prevDep.length !== newDep.length) return true
  for (let i = 0; i < prevDep.length; i++) {
    if (prevDep[i] !== newDep[i]) return true
  }
  return false
}
const useCustomUseMemo = (cb, deps) => {
  //! memoize deps
  const memoRef = useRef(null)
  //! check if deps changed
  if (!memoRef.current || checkDeps(memoRef.current.deps, deps)) {
    memoRef.current = {
      value: cb(),
      deps
    }
  }
  //! clean up cache
  useEffect(() => {
    return () => {
      memoRef.current = null
    }
  }, [])
  //! export calculated value
  return memoRef.current.value
}

export default useCustomUseMemo
