const fs = require("fs")
const pdf = require("html-pdf")

class PdfParser{
    static Write(path, html){
        pdf.create(html, { format: "A4" }).toFile(path, () => {
            console.log("Arquivo salvo com sucesso!")
        })
    }
}

module.exports = PdfParser