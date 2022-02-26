const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let peopleNames = [];
    let peopleAge = [];
    for (let i = 0; i < people.length; i++) {
        person = people[i];
        personName = person.name;
        peopleNames.push(personName);
        if (person.yearOfDeath === undefined) {
            personAge = currentYear - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }
        peopleAge.push(personAge);
    }
    for (let j = 0; j < peopleAge.length; j++) {
        selectedIndex = j;
        for (let k = j + 1; k < peopleAge.length; k++) {
        		nextIndex = k;
            if (peopleAge[j] < peopleAge[k]) {
                break;
            }
        }
        if (nextIndex === peopleAge.length - 1) {
            break;
        }
    }
    return people[selectedIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
