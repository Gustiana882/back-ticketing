const morgan = require("morgan")
const Logger = require("../Helpers/Loger")
const { Writable } = require("stream")

class MyStream extends Writable {
    write(msg) {
        Logger.http(msg) // text yang akan diisi
    }
}

const skip = () => {
    const env = process.env.NODE_ENV || "dev"
    return env !== "development"
}

// Build the morgan middleware
const morganMiddleware = morgan(":method :url :status :res[content-length] - :response-time ms", {
    stream: new MyStream(),
    skip,
})

module.exports = morganMiddleware