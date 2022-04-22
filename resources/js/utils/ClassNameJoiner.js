export default function ClassNameJoiner(baseClass, ...className) {
    let finalClass = baseClass;
    className.forEach((element) => {
        finalClass += ` ${element}`
    });
    return finalClass;
}