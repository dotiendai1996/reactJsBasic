import React, { Component } from 'react';

class DataTableRow extends Component {
    editClick = () => {
        this.props.editUser();
        this.props.changeTrangThaiEditUser();
    }
    checkTrangThaiEditUser = () => {
        if(this.props.trangThaiEditUser !== true){
            return (<button onClick={()=> this.editClick()} className="btn btn-primary"><i className="fa fa-edit" /> Sửa</button>)
        }

    }
    deleleFun = (idUser) => {
        this.props.deleleFun(idUser)
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.props.role}</td>
                <td>
                <div className="btn-group">
                    {this.checkTrangThaiEditUser()}
                    <button onClick= {(idUser)=>this.deleleFun(this.props.id)} className="btn btn-danger"><i className="fa fa-close" /> Xóa</button>
                </div>
                </td>
            </tr>
        );
    }
}

export default DataTableRow;