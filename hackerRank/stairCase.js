function staircase(n) {
  let HASHTAG = "#";
  let line = "";
  let position = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (columnIndex < position) {
        line += " ";
      } else {
        line += HASHTAG;
      }
    }
    console.log(line);
    line = "";
    position -= 1;
  }
}

staircase(8);
