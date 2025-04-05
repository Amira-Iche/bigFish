import './index.css';
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import {ModalProvider} from "./context/ModalContext";
render(
    <ModalProvider>
        <App />
    </ModalProvider>

    , document.getElementById("root"));