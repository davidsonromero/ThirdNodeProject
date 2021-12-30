const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const Read = require('./Read.js')
fs.readFile = new Read()
const Processor = require('./Processor.js')
const Table = require('./Table.js')
const HtmlParser = require('./HtmlParser.js')
const PdfParser = require('./PdfParser.js')

const parseHtml = async (rows) => {
    var html = await HtmlParser.Parse(rows)
    fs.writeFile(Date.now() + ".html", html, err => {
        if (err) throw err
        console.log("Arquivo salvo com sucesso!")
    })
}

const parsePdf = async (rows) => {
    var html = await HtmlParser.Parse(rows)
    return await PdfParser.Write(Date.now() + ".pdf", html)
}

const consoleTable = (rows) => {
    Table.ConsoleTable(rows)
    console.log("\nLinhas: " + Table.GetRowCount(rows))
    console.log("Colunas: " + Table.GetColumnCount(rows))
}

const main = () => {
    rl.question("Qual é o arquivo com os dados para ler? (Deve ser um arquivo .csv)\n", async (input) => {
        const path = input
        var data = await fs.readFile.Read(path)
        var rows = await Processor.ReturnProcess(data)
        rl.question("Escolha uma das opções a seguir:\n 1-Ver a tabela no console\n 2-Salvar a tabela em arquivo html\n 3-Salvar tabela como PDF\n", (option) => {
            switch (option) {
                case "1":
                    consoleTable(rows)
                    break
                case "2":
                    parseHtml(rows)
                    break
                case "3":
                    parsePdf(rows)
                    break
                default:
                    console.log("Opção inválida!")
                    break
            }
            rl.close()
        })
    })
}

main()