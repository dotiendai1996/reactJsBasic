import React, { Component } from 'react';
import DataTableRow from './DataTableRow';

class DataTable extends Component {
 
    deleleFun = (id) =>{
        this.props.deleleFun(id);
    }
    render() {
       // console.log(this.props.dataUserProps);
       //this.props.testKetNoiComponent
        return (
            <div className="col-md-9">
        <table className="table table-striped table-inverse table-hover">
            <thead className="thead-inverse">
            <tr>
                <th>STT</th>
                <th>Tên người dùng</th>
                <th>Số điện thoại</th>
                <th>Quyền truy cập</th>
                <th>Tùy chọn</th>
            </tr>
            </thead>
            <tbody>
                {this.props.dataUserProps.map((value, key)=>{
                    return (
                        <DataTableRow 
                        deleleFun = {(id)=>this.deleleFun(id)}
                        trangThaiEditUser={this.props.trangThaiEditUser} 
                        changeTrangThaiEditUser={()=>this.props.changeTrangThaiEditUser()} 
                        editUser={(user)=>this.props.editUser(value)} 
                        key={key} tel={value.tel} id={value.id} stt={key+1} name={value.name} role={value.role}>
                        </DataTableRow>
                    )
                })}
            </tbody>
        </table>
    </div>

        );
    }
}

export default DataTable;