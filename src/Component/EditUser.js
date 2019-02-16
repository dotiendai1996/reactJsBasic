import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            role : this.props.userEditObject.role
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    saveButton = () => {
        this.props.changeTrangThaiEditUser();
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.role = this.state.role;
       // console.log(info);
        this.props.getUserEditInfo(info);
    }
    
   
    render() {
        return (
            <div className="card border-primary text-white bg-secondary mt-2">
                <div className="card-body">
                <h5 className="text-center">Sửa thông tin người dùng</h5>
                <form>
                <div className="form-group">
                    <label>Tên người dùng</label>
                    <input defaultValue={this.props.userEditObject.name} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name" id="username" aria-describedby="helpId" placeholder="Nhập tên người dùng" />
                </div>
                <div className="form-group">
                    <label >Số điện thoại</label>
                    <input defaultValue={this.props.userEditObject.tel} onChange={(event)=>this.isChange(event)}  type="text" className="form-control" name="tel" id="username" aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group">
                    <label >Quyền truy cập</label>
                    <select  defaultValue={this.props.userEditObject.role} onChange={(event)=>this.isChange(event)}  className="custom-select" name="role" id="role" required>
                    <option value="admin">Admin</option>
                    <option value="nhavien">Nhân viên</option>
                    <option value="boss">Boss</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="button" onClick = {()=>this.saveButton()} className="btn btn-danger btn-block" value="Lưu thông tin"/>
                </div>
                </form>
                </div>
            </div>
        );
    }
}

export default EditUser;