class Processor{
    static Process(data){
        var rows = data.split('\r\n')
        var table = []
        rows.forEach(row => {
            table.push(row.split(','))
        })
        console.log(table)
    }
    static ReturnProcess(data){
        var rows = data.split('\r\n')
        var table = []
        rows.forEach(row => {
            table.push(row.split(','))
        })
        return table
    }
}

module.exports = Processor