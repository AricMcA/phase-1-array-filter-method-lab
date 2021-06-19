const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,name) {
    for (const user of drivers) {
        if (user.name === name) {
            console.log(user)
        }
    }
}

findMatching(users);