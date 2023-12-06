"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEffectAB = void 0;
//Calculate Effect Of Treatment given dataset
const getEffectAB = (controlMean, interventionMean) => {
    ///Edge Cases
    if (typeof controlMean !== "number") {
        throw new Error("Make sure mean of A is a number, it currently is " + typeof controlMean);
    }
    if (typeof interventionMean !== "number") {
        throw new Error("Make sure mean of A is a number, it currently is " +
            typeof interventionMean);
    }
    //absolute diferrence
    const difference = interventionMean - controlMean;
    return difference;
};
exports.getEffectAB = getEffectAB;
//# sourceMappingURL=getEffectAB.js.map