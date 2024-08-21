const heading= React.createElement(
"h2",
{id:"heading"},
"H2 in react"
);

/* heading is an object */
console.log(heading);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

/*nested element */
/*<div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
    </div>
</div> */

const parent=React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child"}),
[React.createElement("h1",{},"h1 heading"),React.createElement("h1",{},"h2 heading")],
React.createElement("div",{id:"child"}),
[React.createElement("h1",{},"h1 heading"),React.createElement("h1",{},"h2 heading")]
]);

root.render(parent);
