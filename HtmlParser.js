const ejs = require('ejs')

class HtmlParser{
    static async Parse(table){
        var header = table[0]
        var content = table.slice(1)
        return await ejs.renderFile("./table_base.ejs", {
            header: header,
            content: content
        })
    }
}

module.exports = HtmlParser