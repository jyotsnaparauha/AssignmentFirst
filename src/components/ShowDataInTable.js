import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import React from "react";
 let columns=[];
const ShowDataInTable=(props)=>{
   
    columns=[
        {headerName: "firstname" , field:'name'},
        {headerName: "Lastname" , field :'lastname'},
        {headerName: "Email" , field :'email'},
        {headerName: "Message" , field :'message'},
        {headerName: "AdditionalDetail" , field:'detail'},
    ] 
    const defaultColDef={
        sortable:true,editable:true,filter:true
    }
    return(
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            
        <AgGridReact rowData={props.data} columnDefs={columns}defaultColDef={defaultColDef}>

        </AgGridReact>
           
      </div>
    );

}
export default ShowDataInTable;