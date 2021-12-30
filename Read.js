const fs = require("fs")
const util = require("util")

class Read {
    constructor(){
        this.read = util.promisify(fs.readFile)
    }
    async Read(path){
        try{
            return await this.read(path, 'utf8')
        }catch(error){
            return error
        }
    }
}

module.exports = Read