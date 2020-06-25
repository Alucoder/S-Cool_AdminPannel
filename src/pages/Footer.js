
import React from "react";
import {
    div
} from 'reactstrap'
    export default function  Footer(){
        return (
    <div class="copyright">
    {"Copyright © "}
    <a color="inherit" href="https://material-ui.com/">
    AluCoder
    </a>
    {new Date().getFullYear()}
    {"."}
    </div>
    );
}
