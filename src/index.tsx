import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material"
import { store } from "setup/store"
import { reportWebVitals } from "./setup/benchmark"
import { Root } from "./scenes"
import { theme } from "setup/theme"
import "./setup/i18-next"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
