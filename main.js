const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];


/*
  Returns all names from the data array.
  Input: Array of person objects.
  Output: Array of names.
 */
function getNamesFromData(data) {
    return data.map(person => {
        return person.name;
    });

}

/*
  Filters people who were born before 1990.
  Input: Array of person objects.
  Output: Array of matching person objects.
 */

function getPersonBefor1990(data) {
    return data.filter(person => {
        return person.birthday.split("-")[2] < 1990;
    });

}

/*
  Counts how many times each food appears in the data.
  Input: Array of person objects with favorite foods.
  Output: Object with food names as keys and their counts as values.
*/
function getAllFoodAndCount(data) {
    let output = {};
    data.forEach(person => {
        person.favoriteFoods.meats.forEach(meat => {
            (meat in output) ? output[meat]++ : output[meat] = 1;
        });
        person.favoriteFoods.fish.forEach(meat => {
            (meat in output) ? output[meat]++ : output[meat] = 1;
        });
    });
    return output;
}


console.log(getNamesFromData(data));
console.log(getPersonBefor1990(data));
console.log(getAllFoodAndCount(data));


