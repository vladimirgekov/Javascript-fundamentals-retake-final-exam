function secretChat(input) {
  let message = input.shift();

  for (const line of input) {
    if (line === "Reveal") {
      break;
    }

    let [command, substring, replacement] = line.split(":|:");

    switch (command) {
      case "Reverse":
        if (message.includes(substring)) {
          let startIndex = message.indexOf(substring);
          let substr = message.substr(startIndex, substring.length);

          message = message.replace(substr, "");
          substr = substr.split("").reverse().join("");
          message += substr;

          console.log(message);
        } else {
          console.log("error");
        }
        break;

      case "ChangeAll":
        while (message.includes(substring)) {
          message = message.replace(substring, replacement);
        }
        console.log(message);
        break;

      case "InsertSpace":
        let index = " ";
        message.split("").slice(1, 1, " ").join("");
        console.log(message);
        break;
    }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
