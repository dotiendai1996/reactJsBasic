import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua : true,
            id : '',
            name : '',
            tel : '',
            role : ''
        }
    }
    trangThaiChange = () =>{
        this.setState({
            trangThaiChinhSua : !this.state.trangThaiChinhSua
        })
    }
    hienThiNut = ()=>{
        if(this.state.trangThaiChinhSua === true){
            return (<div onClick={()=>this.trangThaiChange()} className="btn btn-block btn-outline-primary">Thêm mới</div>);
        }
        else{
            return ( <div>
                <div onClick={()=>this.trangThaiChange()} className="btn btn-block btn-outline-secondary">Đóng lại</div>
            <div className="card border-primary mt-2">
                <div className="card-body">
                <h5 className="text-center">Thêm người dùng</h5>
                <form>
                <div className="form-group">
                    <label>Tên người dùng</label>
                    <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name" id="username" aria-describedby="helpId" placeholder="Nhập tên người dùng" />
                </div>
                <div className="form-group">
                    <label >Số điện thoại</label>
                    <input onChange={(event)=>this.isChange(event)}  type="text" className="form-control" name="tel" id="username" aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group">
                    <label >Quyền truy cập</label>
                    <select onChange={(event)=>this.isChange(event)}  className="custom-select" name="role" id="role" required>
                    <option defaultValue>Chọn quyền mặc định</option>
                    <option value="admin">Admin</option>
                    <option value="nhavien">Nhân viên</option>
                    <option value="boss">Boss</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="reset" onClick={(name, tel, role)=>this.props.getTextFromAdd(this.state.name, this.state.tel, this.state.role)} className="btn btn-primary btn-block" value="Lưu thông tin"/>
                </div>
                </form>
                </div>
            </div>
            </div>);
        }
    }    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        //pakage to item (Đóng gói object)
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.role = this.state.role;
        // console.log(item);
    }
    render() {
       
        return (

            <div className="col-md-3">
            {this.hienThiNut()}
       
    </div>

        );
    }
}

export default Add;