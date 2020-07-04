const { GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./google-poc/credencials.json')

const doc =  new GoogleSpreadsheet('1a0xQ5yA92FcPePWJCQJmA_qMsMDe8mGTPs11IsuOVeA')

const run = async () => {
 await doc.useServiceAccountAuth(credentials)
 await doc.loadInfo();
 console.log(doc.title);

 const  sheet = doc.sheetsByIndex[2]
 await sheet.loadCells('A2:B2')
 console.log(sheet.title)

 const mostrarPromocaoCell = sheet.getCell(1,0);
 console.log(`o valor é ${mostrarPromocaoCell.value}`);

 const textoCell = sheet.getCell(1,1);
 console.log(`A mensagem é ${textoCell.value}`);
}

run();
