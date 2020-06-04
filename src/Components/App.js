import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from './Data.json';
const { v4: uuidv4 } = require('uuid');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm:false,
      data:[],
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    })
  }
  getNewUserData =(name,tel,permission)=> {
    var item ={}
    item.id=uuidv4();
    item.name=name
    item.tel=tel
    item.permission=parseInt(permission)
    var items = this.state.data
    items.push(item)
    this.setState({data:items})
   // console.log(this.state.data)
   localStorage.setItem('userData',JSON.stringify(items))
  }
  editUser = (user) => {
    console.log('da ket noi')
    this.setState({userEditObject:user})
   
  }
  changeEditUserStatus = ()=>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  getUserEditInfoApp = (info)=>{
    console.log('thong tin da sua xong'+info)
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.tel = info.tel;
        value.permission = parseInt(info.permission)
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  deleteButtonClick = (idUser)=>{
    //console.log(idUser)
   
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({data:tempData})
    localStorage.setItem('userData',JSON.stringify(tempData))
    //console.log(this.state.data)

    // this.state.data.forEach((value,key)=>{
    //   if(value.id===idUser){
    //       tempData.filter()
    //   }
    // })
}
  componentDidMount(){
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',JSON.stringify(dataUser))
    }
    else{
       var temp=JSON.parse(localStorage.getItem('userData'));
       this.setState({
         data:temp
       })
      
    }
  }
  render(){
    console.log(this.state.data)
  var ketqua=[];
  this.state.data.forEach((item)=>{
    if(item.name.indexOf(this.state.searchText)!==-1){
      return ketqua.push(item);
    }
  })
  //console.log(this.state.editUserStatus)
  return (
    <div>
      <Header/>
      <div className="seachForm">
        <div className="container">
            <div className="row">
                <SearchForm 
                  getUserEditInfoApp={(info)=>{this.getUserEditInfoApp(info)}}
                  userEditObject={this.state.userEditObject}
                  checkConnectProps ={(dl)=>this.getTextSearch(dl)} 
                  ketNoi={()=>this.doiTrangThai()} 
                  hienThiForm={this.state.hienThiForm}
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatus={()=>this.changeEditUserStatus()}/>
                <div className="col-12">
                <hr/>
                </div>
                <TableData 
                  dataUserProps={ketqua} 
                  editFun={(user)=>this.editUser(user)}
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatus={()=>this.changeEditUserStatus()}
                  deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
                  />
                <AddUser hienThiForm={this.state.hienThiForm} add={(name,tel,permission)=>this.getNewUserData(name,tel,permission)}/>
            </div>
        </div>
     </div> 
    </div>
  );
  }
}



export default App;
