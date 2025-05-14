const ExcelJs =require('exceljs');
const {test} = require("@playwright/test");


test('Exceljs', async()=>{
    const Workbook =await new ExcelJs.Workbook();
//await Workbook.xlsx.readFile("../testdata/download.xlsx")
await Workbook.xlsx.readFile('.\\testdata\\download.xlsx');

const worksheet =await Workbook.getWorksheet('Sheet1');
await worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell,colNumber)=>{
        console.log(cell.value);
    })
})
});

test('excel', async()=>{
test('excel', async()=>{
    const Workbook = await new ExcelJs.Workbook();
    await Workbook.xlsx.readFile('.\\testdata\\download.xlsx');
    
    const worksheet = await Workbook.getWorksheet('Sheet1');
    await worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            console.log(cell.value);
        })
    })
    /*let cell = worksheet.getCell(2,1);
     cell.value = "anila";
    console.log(cell.value);
*/
    await Workbook.xlsx.writeFile('.\\testdata\\download.xlsx');
})
