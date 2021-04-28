import React from "react";
import Handsontable from "handsontable";
import 'handsontable/dist/handsontable.full.css';
import "./styles.scss";
import "../../node_modules/bulma/css/bulma.css";


class Tab extends React.Component{
    constructor(props){
        super(props);
        this.tableContainer = React.createRef();
        this.state = {
            colLabels: [],
            dataArr: [],
            table: null,
            showAddForm: false,
            newFieldLabel: "",
            newFieldKey: ""
        };
    }

    componentDidMount(){
        this.createTable();
    }

    createTable(){
        this.tableContainer.current.innerHTML = "";

        let colLabels = this.props.cols.map(c => c.label);
        let dataArr = this.props.datalist.map(d => {
            let row = [];
            this.props.cols.forEach(col => {
                row.push(d[col.key]);
            });
            return row;
        });

        this.setState({
            colLabels: colLabels,
            dataArr: dataArr,
            table: null
        },() => {
            let table = new Handsontable(this.tableContainer.current, {
                data: this.state.dataArr,
                filters: true,
                dropdownMenu: true,
                colHeaders: this.state.colLabels,
                allowInsertColumn: false,
                allowRemoveColumn: false,
                allowRemoveRow: true,
                contextMenu: ['remove_row','copy','cut'],
                licenseKey: 'non-commercial-and-evaluation',
                colWidths: `${this.getColWidth()}px`,
                height: `${this.props.height}px`,
                afterChange: (changes) => {
                    if(!changes) return;
                    let cArr = changes.map(c => [c[0],this.props.cols[c[1]].key,c[2],c[3]] );
                    this.props.onDataChange("update",cArr);
                },
                afterRemoveRow: (index,amount,physicalRows,source) => {
                    console.log(physicalRows);
                    this.props.onDataChange("removeRow",physicalRows);
                }
            });
            
            this.setState({
                table: table
            });
        });
    }

    getColWidth(){
        let colW = Math.trunc(this.tableContainer.current.getBoundingClientRect().width / this.props.cols.length); 
        return colW > 200 ? colW : 200;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.cols != this.props.cols){
            this.createTable();
        }
    }

    addRow(){
        this.props.onDataChange("addRow",[]);
        this.createTable();
        
    }

    render(){
        return (   
            <>
                <div className="w-100 my-2 has-text-left-tablet">
                    <button className="button is-danger is-light is-small mx-1" onClick={() => {this.setState({showAddForm: !this.state.showAddForm});}}>Add Field</button>
                    <button className="button is-primary is-light is-small" onClick={() => {this.addRow()}}>Add Row</button>

                    {this.state.showAddForm && 
                    <div className="field is-horizontal my-2">
                        
                        <div className="control mx-1">
                            <input className="input is-small" type="text" placeholder="Field Label" value={this.state.newFieldLabel} onChange={(e) => {this.setState({newFieldLabel: e.target.value})}}/>
                        </div>

                        <div className="control mx-1">
                            <input className="input is-small" type="text" placeholder="Field Key" value={this.state.newFieldKey} onChange={(e) => {this.setState({newFieldKey: e.target.value})}}/>
                        </div>

                        <button className="button is-success is-light is-small">Add</button>
                    </div>}
                </div>
                
                <div className="w-100 m-1" ref={this.tableContainer}>
                
                </div>
            </>
        );
    }
}



export default Tab;