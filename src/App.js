import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Search from './Component/Search';
import DataTable from './Component/DataTable';
import Add from './Component/Add';
import Data from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     data : [],
     searchText : '',
     trangThaiEditUser : false,
     userEditObject : {}
   }
 }
 componentWillMount() {
  //kiem tra xem có localstorage chua
  if(localStorage.getItem('userData') === null){
    localStorage.setItem('userData',JSON.stringify(Data));
  }else{
    var tmp = JSON.parse(localStorage.getItem('userData'));
    this.setState({
      data : tmp
    });
  }
}
 

 editUser = (user) => {
   this.setState({
     userEditObject : user
   });
  
 }

 getTextFromSearch = (dl) => {
    this.setState({
      searchText : dl
    });
 }
 getTextFromAdd = (name, tel, role) =>{
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.role = role;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
    localStorage.setItem('userData',JSON.stringify(items));
 }
 changeTrangThaiEditUser = () =>{
   this.setState({
    trangThaiEditUser : !this.state.trangThaiEditUser
   });
 }

 getUserEditInfo = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.role = info.role;
      }
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data));
 }
 deleleFun = (id)=> {
    //ham filter
    // var arr = [1,2,3];
    // var x = 2;
    // arr  = arr.filter(item => item !== x); logg sẽ ra [1,3]
    var tmpData = this.state.data.filter(item => item.id !== id);
    this.setState({
      data : tmpData
    });
   
    if (typeof(Storage) !== "undefined") {
           localStorage.setItem('userData',JSON.stringify(tmpData));
      } else {
          document.write('Trình duyệt của bạn không hỗ trợ local storage');
      }
   
 }

 
  render() {
    //console.log(this.state.data);
  //  localStorage.setItem('userData',JSON.stringify(Data));
 // var tmp = JSON.parse(localStorage.getItem('userData'));
    var rs = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        rs.push(item)
      }
    })
    //console.log(rs);
    return (
      <div className="">
          <Header></Header>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                {/* <Search testKetNoiComponent = {()=>this.testKetNoiComponent()}></Search> */}
                <Search 
                getUserEditInfo={(info)=> this.getUserEditInfo(info)} 
                userEditObject={this.state.userEditObject} 
                changeTrangThaiEditUser={()=>this.changeTrangThaiEditUser()} 
                trangThaiEditUser={this.state.trangThaiEditUser} 
                getTextFromSearch={(dl)=>this.getTextFromSearch(dl)}></Search>
                <div className="col-md-12">
                    <hr/>
                </div>
                <DataTable 
                deleleFun = {(id)=>this.deleleFun(id)}
                changeTrangThaiEditUser={()=>this.changeTrangThaiEditUser()} 
                dataUserProps={rs} 
                editUser={(user)=>this.editUser(user)} 
                trangThaiEditUser={this.state.trangThaiEditUser}></DataTable>
                <Add
                 getTextFromAdd={(name, tel, role)=>this.getTextFromAdd(name, tel, role)}></Add>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
