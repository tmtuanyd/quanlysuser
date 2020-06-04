import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 text-uppercase">Project quản lý thành viên bằng ReactJS</h1>
                    <p className="lead font-italic"> với dữ liệu Json</p>
                    <hr className="my-2" />
                </div>
            </div>

        );
    }
}

export default Header;