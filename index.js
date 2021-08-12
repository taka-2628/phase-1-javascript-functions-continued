
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}

saturdayFun('bathe my dog')
/*
console.log(saturdayFun());
//=> This Saturday, I want to roller-skate!
console.log(saturdayFun('bathe my dog'));
//=> This Saturday, I want to bathe my dog!
*/



const mondayWork = function(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}

mondayWork('work from home');



function wrapAdjective(whatever = "*"){
    return function(adjective = "special"){
        return `You are ${whatever}${adjective}${whatever}!`
    }
}

console.log(wrapAdjective()());
//=> You are *special*!
console.log(wrapAdjective('||')());
//=> You are ||special||!