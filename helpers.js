/*


*/

function successfullMessage(msg) {
    return "β *WhatsAsena*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *WhatsAsena*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *WhatsAsena*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
