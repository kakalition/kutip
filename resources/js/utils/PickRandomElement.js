import _ from "lodash";

export const pickRandomElement = (list) => {
    const randomIndex = _.random(0, list.length, false);
    return list[randomIndex];
}