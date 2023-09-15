console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) return console.log("negative input");
  for (let i = 1; i <= count; i++) {
    if (i % 2 === 1) console.log(i);
  }
}
// test logs
printOdds(10);
printOdds(-3);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  if (!age) return console.log("Function requires name and age");
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  age >= 16 ? console.log(aboveSixteen) : console.log(belowSixteen);
}

// test logs
checkAge("Douglass", 23);
checkAge("Terry", 13);
checkAge("Joe");
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const whichQuadrant = (x, y) =>
  console.log(
    x === 0 && y === 0
      ? `(${x}, ${y}) is on the origin`
      : x === 0
      ? `(${x}, ${y}) is on the x axis`
      : y === 0
      ? `(${x}, ${y}) is on the y axis`
      : x > 0
      ? y > 0
        ? `(${x}, ${y}) is in Quadrant 1`
        : `(${x}, ${y}) is in Quadrant 4`
      : y > 0
      ? `(${x}, ${y}) is in Quadrant 2`
      : `(${x}, ${y}) is in Quadrant 3`
  );

// test logs
whichQuadrant(0, 0);
whichQuadrant(0, 1);
whichQuadrant(1, 0);
whichQuadrant(1, 1);
whichQuadrant(1, -1);
whichQuadrant(-1, 1);
whichQuadrant(-1, -1);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const getTriangletype = (side1, side2, side3) => {
  let type = "scalene";
  if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2)
    type = "invalid";
  if (side1 === side2 || side2 === side3 || side1 === side3) type = "isosceles";
  if (side1 === side2 && side2 === side3) type = "equalateral";

  return `Sides ${side1}, ${side2}, ${side3} make an ${type} triangle`;
};

// test logs
console.log(getTriangletype(1, 1, 1));
console.log(getTriangletype(1, 1, 2));
console.log(getTriangletype(1, 2, 3));
console.log(getTriangletype(5, 1, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const dataUsage = (planLimit, day, usage) => {
  const averageDailyUse = usage / day;
  const targetDailyUse = planLimit / 30;
  const daysRemaining = 30 - day;
  const difference = Math.abs(averageDailyUse - targetDailyUse);
  const rate =
    averageDailyUse > targetDailyUse
      ? "above"
      : averageDailyUse < targetDailyUse
      ? "below"
      : "meeting";

  console.log(
    `${day} days used, ${daysRemaining} days remaining.\nTarget daily use: ${targetDailyUse.toFixed(
      2
    )}GB.\nAverage daily use: ${averageDailyUse.toFixed(
      2
    )}GB.\nYou are ${rate} the target daily use${
      rate === "meeting"
        ? "."
        : " by " + difference.toFixed(2).toString() + "GB per day."
    }\n${
      rate === "above"
        ? "At this rate you will exceed your plan limit by " +
          (daysRemaining * difference).toFixed(2).toString() +
          "GB.\nTo stay below your data plan, use no more than " +
          (targetDailyUse - (day * difference) / daysRemaining)
            .toFixed(2)
            .toString() +
          "GB per day."
        : rate === "below"
        ? "You can increase your daily usage to " +
          (targetDailyUse + (day * difference) / daysRemaining)
            .toFixed(2)
            .toString() +
          "GB per day."
        : "You should keep doing what you're doing!"
    }`
  );
};

// test logs
dataUsage(10, 15, 5);
dataUsage(10, 15, 3);
dataUsage(10, 15, 7);
