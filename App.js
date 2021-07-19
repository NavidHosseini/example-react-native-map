import React from "react"
import { I18nManager, StatusBar } from "react-native"

import { Provider } from "./states/Context"
import { ProviderColor } from "./states/ContextColor"
import { ProviderAllText } from "./states/ContextAllText"
import Main from "./src/main/Main"

const App = () => {
  I18nManager.forceRTL(true)
  return (
    <>
      <StatusBar backgroundColor={'#0f527c'} />
      <Main />
    </>

  )
}

export default () => {
  return (
    <ProviderAllText>
      <Provider>
        <ProviderColor>
          <App />
        </ProviderColor>
      </Provider>
    </ProviderAllText>
  )
}
