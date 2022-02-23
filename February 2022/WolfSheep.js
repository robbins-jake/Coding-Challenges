// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
    let revq = queue.reverse()
    return revq[0] === "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${revq.indexOf("wolf")}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))