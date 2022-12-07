import './jquery.dataTables.css'
// import './jquery.dataTables.min.css'
import React, { Component } from 'react'
import $ from 'jquery'
import dt from 'datatables.net'
import Axios from "axios";

$.DataTable = dt
export class Tbl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        };
    }

    async getUsersData() {
        const res = await Axios.get("https://sarmicrosystems.in/react_inventory/get_vendor.php");
        this.setState({ loading: false, users: res.data });
    }
    componentDidMount() {
        this.getUsersData().then(() => this.sync());
    }

    sync() {
        if (!this.state.loading) {
            this.$el = $(this.el)
            this.$el.DataTable = dt
            this.$el.DataTable({
                // dom: 'Bfrtip',
                data: this.state.users,
                columns: [
                    { title: "#", data: "id" },
                    { title: "vendor", data: "name" },
                    { title: "Contact", data: "contact" },
                    { title: "Email", data: "email" },
                ],
                
            }
            )
        }
    }

    render() {
        return <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div>
                                    <table className="display" width="100%" ref={el => this.el = el}>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
// export var junk;