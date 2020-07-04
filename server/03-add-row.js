const { GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./google-poc/credencials.json')

const doc =  new GoogleSpreadsheet('1a0xQ5yA92FcPePWJCQJmA_qMsMDe8mGTPs11IsuOVeA')

const run = async () => {
 await doc.useServiceAccountAuth(credentials)
 await doc.loadInfo();
 console.log(doc.title);

 const  sheet = doc.sheetsByIndex[1]
 await sheet.addRow({
    Nome: 'Thiago Marcato',
    Email: 'thiagomarcato@gmail.com',
    Whatsapp: '11994037357',
    Cupom :  '03 7777',
    Promo : 'CursoGratis'
 })


}

run();
