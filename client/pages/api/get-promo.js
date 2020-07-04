import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../google-poc/credencials.json'

const doc = new GoogleSpreadsheet('1a0xQ5yA92FcPePWJCQJmA_qMsMDe8mGTPs11IsuOVeA')


export default async (req, res) => {

    try {


        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo();
 
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
 
        const mostrarPromocaoCell = sheet.getCell(1, 0);
 
        const textoCell = sheet.getCell(1, 1);
 

        res.end(JSON.stringify({
            showCoupom: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
        }))

    } catch (error) {
        res.end(JSON.stringify({
            showCoupom: true,
            message: error.value
        }))
    }


}