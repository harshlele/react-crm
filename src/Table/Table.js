import React from "react";
import Handsontable from "handsontable";
import 'handsontable/dist/handsontable.full.css';
import "./styles.scss";

class Tab extends React.Component{
    constructor(props){
        super(props);
        this.tableContainer = React.createRef();
    }

    componentDidMount(){
        this.createTable();
    }

    createTable(){
        this.tableContainer.current.innerHTML = '';

        let colLabels = this.props.cols.map(c => c.label);
        let dataArr = this.props.datalist.map(d => {
            let row = [];
            this.props.cols.forEach(col => {
                row.push(d[col.key]);
            });
            return row;
        });

        let table = new Handsontable(this.tableContainer.current, {
            data: dataArr,
            filters: true,
            dropdownMenu: true,
            colHeaders: colLabels,
            readOnly: true,
            allowInsertColumn: false,
            allowRemoveColumn: false,
            licenseKey: 'non-commercial-and-evaluation',
            colWidths: `${this.getColWidth()}px`,
            height: `${this.props.height}px`,

          });
    }

    getColWidth(){
        return Math.trunc(this.tableContainer.current.getBoundingClientRect().width / this.props.cols.length);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.cols != this.props.cols){
            this.createTable();
        }
    }

    render(){
        return (   
           <div className="w-100" ref={this.tableContainer}>
               
           </div>
        );
    }
}



export default Tab;