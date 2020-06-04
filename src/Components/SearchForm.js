import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:'',
            userObj:{}
        }
    }
    getUserEditInfo =(info) =>{
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info)
    }
    
    isChange = (event) => {
        //console.log(event.target.value)
        this.setState({tempValue:event.target.value})
        this.props.checkConnectProps(event.target.value)
        //console.log(this.state.tempValue)
    }
    hienThiNut = ()=> {
        if(this.props.hienThiForm){
           return <div className="btn  btn-outline-secondary" onClick={this.props.ketNoi}>Đóng lại</div>
        }
        else {
            return <div className="btn  btn-outline-info" onClick={this.props.ketNoi}>Thêm mới</div>
        }
    }
    isShowEditForm = () =>{
        if(this.props.editUserStatus) {
            return <EditUser
                    changeEditUserStatus={()=>this.props.changeEditUserStatus()}
                    userEditObject={this.props.userEditObject}
                    getUserEditInfo={(info)=>this.getUserEditInfo(info)}
                    />
        }
    }
    render() {
  
        return (
           
            <div className="col-12">
             
                    {this.isShowEditForm()}
               
                <div className="form-group">
                    <div className="btn-group">
                    
                    <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" placeholder="Nhap ten can tim" />
                    
                    <div className="btn btn-info"  onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tim</div>
                    
                    </div>
                </div>
                <div className="btn-group">
                    {this.hienThiNut()}
                   
                </div>
            </div>
            
           
        );
    }
}

export default SearchForm;