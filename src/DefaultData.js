import Cols from "./DefaultCols";
import faker from "faker";

let conData = [];
let dealData = [];

let i = 0;
while(i < 10){
let cRow = {};
Cols.ContactCols.forEach(c => {
    switch(c.label){
        case "Name":
            cRow[c.key] = faker.name.findName();
            break;
        case "Phone":
            cRow[c.key] = faker.phone.phoneNumber();
            break;
        case "Title":
            cRow[c.key] = faker.name.jobTitle();
            break;
        case "Company":
            cRow[c.key] = faker.company.companyName();
            break;
        case "Contact Type":
            cRow[c.key] = faker.company.bs();
            break;
        case "Stage":
            cRow[c.key] = faker.company.bs();
            break;
        case "Last Contact":
            cRow[c.key] = faker.date.recent();
            break;
        case "Notes":
            cRow[c.key] = faker.commerce.productDescription();
            break;
    
    }
});
conData.push(cRow);

let dRow = {};
Cols.DealCols.forEach(d => {
   switch(d.label){
    case "Deal Name":
        dRow[d.key] = faker.name.findName();
        break;
    case "Description":
        dRow[d.key] = faker.finance.transactionDescription();
        break;
    case "Likelihood of Closing":
        dRow[d.key] = faker.name.jobTitle();
        break;
    case "Deal Value":
        dRow[d.key] = faker.commerce.price();
        break;
    case "Category":
        dRow[d.key] = faker.company.bs();
        break;
    case "Deal Stage":
        dRow[d.key] = faker.company.bs();
        break;
   
   }
});
dealData.push(dRow);

i++;
}

export default {contacts:conData, deals:dealData};