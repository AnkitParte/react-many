import { useRef } from "react"

const useCustomUseEffect: any = (effect, deps) => {
  let isFirstRender = useRef(true)
  let prevDeps = useRef([])

  //! 1. when component mount
  if (isFirstRender.current) {
    isFirstRender.current = false
    let cleanUp = effect()

    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp()
      }
    }
  }

  //! 2. when deps change and no deps array
  const depChange = deps ? JSON.stringify(prevDeps.current) !== JSON.stringify(deps) : true
  if (depChange) {
    let cleanUp = effect()
    if (cleanUp && typeof cleanUp === "function") {
      cleanUp()
    }
  }

  //! 3. when component unmount
  prevDeps.current = deps || []
}

export default useCustomUseEffect
