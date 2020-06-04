import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
 
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
     
        this.setState({[name]:value})
        var item ={}
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.permission=this.state.permission
        //console.log(item)
    }
    //package to item
    
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm){
            return (
                <div className="card border-info mb-3 mt-2" style={{maxWidth: '18rem'}}>
    <div className="card-header">Thêm mới User vào hệ thống</div>
    <form>
    <div className="card-body text-info">                       
      <div className="form-group">                   
        <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control"  placeholder="Tên User" />
      </div>
      <div className="form-group">                   
        <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control"  placeholder="Điện thoại" />
      </div>
      <div className="input-group">
        <select name="permission" onChange={(event)=>this.isChange(event)} className="custom-select" id="inputGroupSelect02">
          <option defaultValue>Chọn quyền mặc định</option>
          <option value={1}>Admin</option>
          <option value={2}>Moderator</option>
          <option value={3}>Normal</option>
        </select>
      </div>
      <input type="reset" onClick={(name,tel,permission)=>this.props.add(this.state.name,this.state.tel,this.state.permission)} className="btn btn-block btn-primary mt-3 themmoi" value="Thêm mới"/>
    </div>
    </form>
  </div>

            )
        }
      }

    render() {
        //console.log(this.props.hienThiForm)
        // console.log(this.state)
        return (
            <div className="col-3">
            {this.kiemTraTrangThai()}
                
          </div>

        );
    }
}

export default AddUser;