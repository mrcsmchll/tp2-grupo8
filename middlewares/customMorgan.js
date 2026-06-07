import morgan from "morgan";

/**
* Customiza el formato `dev` agregando el token `:message` correspondiente
* al `response.statusMessage`
* 
*(Nota: con esta customizacion se pierde el color code)
*/
function customMorgan() {
    morgan.token('message', function (req, res) { return res.statusMessage})
    return morgan(":method :url :status (:message) :response-time ms - :res[content-length]")
}

export default customMorgan;