import _ from "lodash";

export const PickRandomElement = (list) => {
    const randomIndex = _.random(0, list.length, false);
    const pickedQuote = list.splice(randomIndex, 1);
    return pickedQuote;
}