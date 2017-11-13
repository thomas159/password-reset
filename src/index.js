import 'sanitize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './globalStyles'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
