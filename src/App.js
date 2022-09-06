function App() {
  const PopulateArray = (num1, num2, num3) => {
    let arr = [];

    for (let i = 0; i < num1; i++) {
      arr[i] = [];
      for (let j = 0; j < num2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < num3; k++) {
          arr[i][j][k] = i * j * k;
        }
      }
    }

    return arr;
  };

  const ShowMaxSentence = (fullText, maxWord) => {
    const textArr = fullText.split(" ");
    const newTextArr = [];
    let checkPoint;

    if (maxWord > textArr.length) {
      maxWord = textArr.length;
    }

    for (let i = 0; i < maxWord; i++) {
      if (
        textArr[i].includes("?") ||
        textArr[i].includes("!") ||
        textArr[i].includes(".")
      ) {
        checkPoint = i;
      }
    }

    for (let i = 0; i < checkPoint + 1; i++) {
      newTextArr.push(textArr[i]);
    }


    const newText = newTextArr.join(" ");
    return newText;
  };

  //Input values here

  console.log(PopulateArray(3, 3, 3));


  // console.log(
  //   ShowMaxSentence(
  //     "How much is that doggie in the window? I do hope that doggie's for sale.",
  //     9
  //   )
  // );

  return <div></div>;
}

export default App;
