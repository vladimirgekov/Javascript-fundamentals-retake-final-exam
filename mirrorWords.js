function mirrorWords(input) {
  let text = input.shift();
  const regex = /(@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;

  let validText = Array.from(text.matchAll(regex));
  let mirrorWord = [];

  if (validText.length === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${validText.length} word pairs found!`);

    for (let line of validText) {
      let firstWord = line[2];
      let secondWord = line[3].split("").reverse().join("");

      if (firstWord === secondWord) {
        secondWord = secondWord.split("").reverse().join("");
        let line = `${firstWord} <=> ${secondWord}`;
        mirrorWord.push(line);
      }
    }

    if (mirrorWord.length > 0) {
      console.log("The mirror words are:");
      console.log(mirrorWord.join(", "));
    }
  }

  if (mirrorWord.length === 0) {
    console.log("No mirror words!");
  }
}
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
