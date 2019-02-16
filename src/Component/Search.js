import React, { Component } from 'react';
import EditUser from './EditUser';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tmpValue : '',
            userObj : {}
        }
    }
    
    isChange = (event) =>{
        this.setState({
            tmpValue : event.target.value
        });
         this.props.getTextFromSearch(this.state.tmpValue);
    }
    checkTrangThaiEditUser = () =>{
        if(this.props.trangThaiEditUser === true){
            return ( <EditUser getUserEditInfo = {(info) => this.getUserEditInfo(info)} userEditObject={this.props.userEditObject} changeTrangThaiEditUser={()=>this.props.changeTrangThaiEditUser()}></EditUser>  )
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfo(info)
    }
    render() {
        //console.log(this.state.tmpValue);
        return (
              
                    <div className="col-md-12">
                    <div className="form-group search">
                        <div className="btn-group">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="search" aria-describedby="helpId" placeholder="Nhập từ khóa" alt="" />
                        <div className="btn btn-info" onClick={(dl)=>this.props.getTextFromSearch(this.state.tmpValue)}>Tìm kiếm</div>
                        </div>
                    </div>
                     {this.checkTrangThaiEditUser()}
                </div>
               
                   
              
              
        );
    }
}

export default Search;