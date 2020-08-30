function needForSpeed(input) {
  let numberOfCars = input.shift();

  for (let i = 0; i < numberOfCars; i++) {
    var [car, mileage, fuel] = input.shift().split("|");
  }
  for (let i = 0; i < numberOfCars; i++) {
    let [command, elone, eltwo, elthree] = input.shift().split(" : ");

    switch (command) {
      case "Drive":
        if (elthree > fuel) {
          console.log(`Not enough fuel to make that ride`);
        } else {
          mileage += eltwo;
          fuel -= elthree;
          console.log(
            `${elone} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`
          );
          if (mileage >= 100000) {
            car.slice();
            console.log(`Time to sell the ${car}`);
          }
        }
        break;
      case "Refuel":
        if (elthree > 75) {
          let prelivashtogorivo = elthree - 75;
          console.log(`${car} refueled with ${prelivashtogorivo} liters`);
        }
        break;
      case "Revert":
        mileage -= eltwo;
        console.log(`${car} mileage decreased by ${mileage} kilometers`);
        if (mileage < 10000) {
          mileage = 10000;
        }
        break;
      case "Stop":
        mileage.sort((a, b) => a - b);
        cars.sort((a, b) => b - a);
        console.log(
          `${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`
        );
        break;
    }
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
