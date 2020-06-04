import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        switch (this.props.permission) {
            case 1: 
                return "Admin"
                break;
            case 2: 
                return "Moderator"
                break;
            case 3: 
                return "Normal User"
                break;
        }
    }

    editClick = ()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
   
    render() {
        return (
            <tr>
        <td >{this.props.stt}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.phoneUser}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div onClick={()=>this.editClick()} className="btn btn-warning sua"><i className="fas fa-edit" /> Sửa</div>
            <div onClick={(idUser)=>this.props.deleteButtonClick(this.props.idUser)} className="btn btn-danger xoa"><i className="fas fa-trash-alt" /> Xoá</div>
          </div>
        </td>
      </tr>
        );
    }
}

export default TableDataRow;