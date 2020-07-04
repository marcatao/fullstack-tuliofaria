import { GoogleSpreadsheet } from 'google-spreadsheet'
import  moment from 'moment'
import credentials from '../../google-poc/credencials.json'

const doc = new GoogleSpreadsheet('1a0xQ5yA92FcPePWJCQJmA_qMsMDe8mGTPs11IsuOVeA')



export default async (req, res) => {
    try {


        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo();
        console.log(doc.title);

        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[1]
        await sheetConfig.loadCells('A2:B2')
        const promo = sheetConfig.getCell(1, 0);
 
        let Cupom = ''
        let Promo = ''

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: '03 7777',
            Promo: 'CursoGratis',
            DataHora : moment().format('DD/MM/YYYY, HH:mm:ss'),
            Nota: 5
        })


        res.end(req.body)
    } catch (error) {
        console.log(error)
    }
}