// code your solution here
function superbowlWin(record){
    const result = record.find(elm => elm.result === "W" )
    if (result) {
        return result.year 
    }
    return undefined
}