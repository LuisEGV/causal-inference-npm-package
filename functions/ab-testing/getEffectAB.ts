//Calculate Effect Of Treatment given dataset
const getEffectAB = (controlMean: number, interventionMean: number) => {
  ///Edge Cases
  if (typeof controlMean !== "number") {
    throw new Error(
      "Make sure mean of A is a number, it currently is " + typeof controlMean
    );
  }

  if (typeof interventionMean !== "number") {
    throw new Error(
      "Make sure mean of A is a number, it currently is " +
        typeof interventionMean
    );
  }

  //absolute diferrence

  const difference = interventionMean - controlMean;

  return difference;
};

export { getEffectAB };
