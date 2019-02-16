import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">Project quản lý người dùng</h1>
                    <p className="lead">Trang giao diện quản lý người dùng</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;