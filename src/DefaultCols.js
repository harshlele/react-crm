const ContactCols = [
    {
        label: "Name",
        type: "text"
    },
    {
        label: "Phone",
        type: "number"
    },
    {
        label: "Title",
        type: "text"
    },
    {
        label: "Company",
        type: "text"
    },
    {
        label: "Contact Type",
        type: "text"
    },
    {
        label: "Stage",
        type: "text"
    },
    {
        label: "Last Contact",
        type: "date"
    },
    {
        label: "Notes",
        type: "text"
    }
];


const DealCols = [
    {
        label: "Deal Name",
        type: "text"
    },
    {
        label: "Description",
        type: "text"
    },
    {
        label: "Likelihood of Closing",
        type: "text"
    },
    {
        label: "Deal Value",
        type: "number"
    },
    {
        label: "Category",
        type: "text"
    },
    {
        label: "Deal Stage",
        type: "text"
    },
];

ContactCols.forEach(c => c.key = c.label.replace(/ /g,"").toLowerCase());
DealCols.forEach(c => c.key = c.label.replace(/ /g,"").toLowerCase());

export default {DealCols,ContactCols};