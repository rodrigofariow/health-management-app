import React, { lazy, Suspense } from 'react'

const loadable = <C extends React.ComponentType<any>>(
  importFunc: () => Promise<{
    default: C
  }>,
  { fallback = null }: { fallback: React.SuspenseProps['fallback'] } = {
    fallback: null
  }
) => {
  const LazyComponent = lazy(importFunc)

  return (props: React.ComponentProps<C>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable
