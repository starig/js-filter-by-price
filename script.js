let courses = [
    { name: "Courses in England", prices: [0, 100] }, //+
    { name: "Courses in Germany", prices: [500, null] }, //-
    { name: "Courses in Italy", prices: [100, 200] }, //+
    { name: "Courses in Russia", prices: [null, 400] }, //+
    { name: "Courses in China", prices: [50, 250] }, //+
    { name: "Courses in USA", prices: [200, null] }, //+
    { name: "Courses in Kazakhstan", prices: [56, 324] }, //+
    { name: "Courses in France", prices: [null, null] }, // +
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];





const filterByPrice = (array, range) => {
    const minPrice = range[0];
    const maxPrice = range[1];
    let filteredArray = [];
    array.forEach(item => {
        const itemMinPrice = item.prices[0];
        const itemMaxPrice = item.prices[1];
        (itemMinPrice === null && itemMaxPrice === null && (minPrice !== null || maxPrice !== null))
        && filteredArray.push(item);

        switch (true) {
            case (minPrice !== null && maxPrice !== null):
                if (itemMaxPrice !== null && itemMaxPrice <= maxPrice  || itemMinPrice === null
                    || itemMinPrice >= minPrice && itemMinPrice <= maxPrice) {
                    filteredArray.push(item);
                }
                break
            case (minPrice === null && maxPrice !== null):
                if (itemMaxPrice <= maxPrice && itemMaxPrice !== null || itemMinPrice <= maxPrice) {
                    filteredArray.push(item);
                }
                break
            case (minPrice !== null && maxPrice === null):
                if (itemMinPrice >= minPrice || itemMaxPrice >= minPrice) {
                    filteredArray.push(item);
                }
                break
            case (minPrice === null && maxPrice === null):
                console.log('range is undefined');
                !filteredArray.includes(item) && filteredArray.push(item);
                break
        }
    })
    return filteredArray;
};

const result1 = filterByPrice(courses, requiredRange1);
const result2 = filterByPrice(courses, requiredRange2);
const result3 = filterByPrice(courses, requiredRange3);

console.log(result1);
console.log(result2);
console.log(result3);