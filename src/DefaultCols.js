const ContactCols = [
    {
        label: "Name",
         
    },
    {
        label: "Phone",
         
    },
    {
        label: "Title",
         
    },
    {
        label: "Company",
         
    },
    {
        label: "Contact Type",
         
    },
    {
        label: "Stage",
         
    },
    {
        label: "Last Contact",
         
    },
    {
        label: "Notes",
         
    }
];


const DealCols = [
    {
        label: "Deal Name",
         
    },
    {
        label: "Description",
         
    },
    {
        label: "Likelihood of Closing",
         
    },
    {
        label: "Deal Value",
         
    },
    {
        label: "Category",
         
    },
    {
        label: "Deal Stage",
         
    },
];

ContactCols.forEach(c => c.key = c.label.replace(/ /g,"").toLowerCase());
DealCols.forEach(c => c.key = c.label.replace(/ /g,"").toLowerCase());

export default {DealCols,ContactCols};