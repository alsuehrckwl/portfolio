import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

class AppState {
  @observable
  public timer = 0

  constructor() {
    setInterval(() => {
      this.timer += 1
    },          1000)
  }

  public resetTimer() {
    this.timer = 0
  }
}

@observer
class TimerView extends React.Component<{ appState: AppState }, {}> {
  public render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <DevTools />
      </div>
    )
  }

  public onReset = () => {
    this.props.appState.resetTimer()
  }
}

const appState = new AppState()

ReactDOM.render(<TimerView appState={appState} />, document.getElementById(
  'root',
) as HTMLElement)
registerServiceWorker()
