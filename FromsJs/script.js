const handleTextChange = (e) => {
  // console.log(e);
  const text = e.target.value;
  // console.log(text.toUpperCase());
};

const handleKeyDown = (e) => {
  // console.log(e);
  const text = e.target.value;
  console.log(text.toUpperCase());
};

const handleKeyUp = (e) => {
  // console.log(e);
  const text = e.target.value;
  console.log("key Up" + text.toUpperCase());
};
