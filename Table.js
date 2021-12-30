class Table{
    static ConsoleTable(rows){
        var table = " | "
        var header = rows[0]    
        var content = rows.slice(1)
        header.forEach(cell => {
            table += (cell + " | ").toUpperCase()
        })
        table += "\n"
        content.forEach(row => {
            table += " | "
            row.forEach(cell => {
                table += cell + " | "
            })
            table += "\n"
        })
        console.log(table)
    }

    static GetRowCount(Rows){
        return Rows.length
    }

    static GetColumnCount(Rows){
        return Rows[0].length
    }
}

module.exports = Table