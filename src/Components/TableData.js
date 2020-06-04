import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  mappingDataUser = () => this.props.dataUserProps.map((value,key)=>(
    <TableDataRow 
    changeEditUserStatus={()=>this.props.changeEditUserStatus()}
    editFunClick={(user)=>this.props.editFun(value)} 
    key={key} stt={key+1} 
    idUser={value.id}
    userName={value.name} 
    phoneUser={value.tel} 
    permission={value.permission}
    deleteButtonClick = {(idUser)=>this.props.deleteButtonClick(idUser)}>
    </TableDataRow>
  ))
  
 
    render() {
      // console.log(this.props.editFun);
        return (
            
                <div className="col-9">
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện Thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {this.mappingDataUser()}
      
    </tbody>
  </table>
</div>


            
        );
    }
}

export default TableData;