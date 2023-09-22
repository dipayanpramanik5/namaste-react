const heading = React.createElement("h1", { id: "heading" }, "Hello world from react");
console.log(heading);
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I am a h1 tag"),
            React.createElement("p", { className: "ptag" }, "I am a P tag")
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
