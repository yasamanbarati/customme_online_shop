import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"

import { reportWebVitals } from "./setup/benchmark"

import {CssBaseline, ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"

import { store } from "setup/store"
import { theme } from "setup/theme"
import { Root } from "scenes"

import "./setup/i18-next"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Root />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>
)

reportWebVitals()
