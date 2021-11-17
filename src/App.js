import React, { lazy, Suspense } from 'react'
import ReactDom from 'react-dom'

const App = lazy(() => import('./App'))

ReactDom.render(
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <App />
      </section>
    </Suspense>
  </div>,
  document.getElementById('root')
)
