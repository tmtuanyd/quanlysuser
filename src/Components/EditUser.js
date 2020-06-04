import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tell:this.props.userEditObject.tell,
            permission:this.props.userEditObject.permission
        }
    }
    
    permissionShow = () => {
        switch (this.props.userEditObject.permission) {
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
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    saveButton = ()=>{
        var info ={}
        info.id=this.state.id
        info.name=this.state.name
        info.tel=this.state.tel
        info.permission=this.state.permission
        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus()
    }
    render() {
        return (
            <div className="card border-info text-white bg-warning mb-3 mt-2">
    <div className="card-header text-center">Sửa thông tin User</div>
    <form>
    <div className="card-body text-info">                       
      <div className="form-group">                   
        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name"  className="form-control"  placeholder="Tên User" />
      </div>
      <div className="form-group">                   
        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel"  className="form-control"  placeholder="Điện thoại" />
      </div>
      <div className="input-group">
        <select onChange={(event)=>this.isChange(event)} name="permission"  className="custom-select" id="inputGroupSelect02">
        <option defaultValue>{this.permissionShow()}</option>
          <option value={1}>Admin</option>
          <option value={2}>Moderator</option>
          <option value={3}>Normal</option>
        </select>
      </div>
      <input type="button"  className="btn btn-block btn-danger mt-3 themmoi" value="Lưu" onClick={()=>this.saveButton()}/>
    </div>
    </form>
  </div>
        );
    }
}

export default EditUser;