const main = document.getElementById("table");

// const li=document.createElement("li");
// li.innerText="Item1";
// const li1=document.createElement("li");
// li1.innerText="Item1";
// const li2=document.createElement("li");
// li2.innerText="Item1";
// ul.appendChild(li);
// ul.appendChild(li1);
// ul.appendChild(li2);
// main.appendChild(ul);

// console.log(React);
// console.log(ReactDOM);

// const reactRoot = ReactDOM.createRoot(main);
// const li1 = React.createElement(
//   "li",
//   { id: "item1", style: { color: "red" }, className: "item" },
//   "Item1"
// );
// const li2 = React.createElement("li", null, "Item2");
// const li3 = React.createElement("li", null, "Item3");
// const ul = React.createElement("ul", null, li1, li2, li3);
// reactRoot.render(ul);

// const reactRoot = ReactDOM.createRoot(main);
// // const title = React.createElement("p", null, "Hello This is first from react");

// const title2 = {
//   $$typeof: Symbol.for("react.element"),
//   type: "p",
//   key: null,
//   ref: null,
//   props: {
//     style: { color: "red" },
//     children: "Hello This is first from react",
//   },
//   _owner: null,
//   _store: {},
// };
// console.log(typeof title);
// console.log(title);
// reactRoot.render(title2);


const reactRoot = ReactDOM.createRoot(main);

const title=<h1>Hello</h1>
reactRoot.render(title);


