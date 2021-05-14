function findMatching(array, str){
    const match = array.filter(s => s.toLowerCase() === str.toLowerCase() )
    return match
}

function fuzzyMatch(array, str){
    const match = array.filter(s => s.toLowerCase()[0] === str.toLowerCase()[0] )
    return match
}

function matchName(array, str){
    const match = array.filter(s => s.name.toLowerCase() === str.toLowerCase() )
    return match
}

