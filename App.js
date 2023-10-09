import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello world from react");
console.log(heading);
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a h1 tag by Dipayan"),
        React.createElement("h2", {}, "I am a h2 tag"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag"),
    ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
