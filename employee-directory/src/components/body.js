import React, { useState, Component } from "react";
import API from "../utils/API.js"
import Search from "../components/searchbox.js"

 

class Body extends Component {
    state = {
        employees: [],
        filterEmployees: [],
        sortOrder: "desc",
    }
    componentDidMount () {
        API.getEmployees().then(employee => {
            this.setState({
                employees: employee.data.results,
                filterEmployees: employee.data.results,
            })
        })
    }

    handleSearch = e => {
        var searchVal = e.target.value

        var filterstate = this.state.employees.filter(data => {
            var checkValues = Object.values(data).join("").toLowerCase()
            return checkValues.indexOf(searchVal.toLowerCase()) !== -1
        })
        this.setState({
            filterEmployees: filterstate
        })
    }

    handleSort = e => {
        if(this.state.sortOrder === "desc"){
            this.setState({sortOrder: "asc"})
        } else {
            this.setState({sortOrder: "desc"})
        }
        const sortedEmployees = this.state.employees.sort((a, b) => {
            if (this.state.sortOrder === "asc"){
                if (a.name.first > b.name.first)
                return -1;
            } else {
                if (a.name.first < b.name.first)
                return 1;                
            }
            // if (a.name.first > b.name.first)
            //     return -1;
            // if (a.name.first < b.name.first)
            //     return 1;
            return 0;
        });
        this.setState({employees: sortedEmployees})
    }


    render(){
        return (
            <div>
                <Search handleSearch = {this.handleSearch}/>
                <th>Image</th>
                <th onClick={this.handleSort}>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Age</th>
                {this.state.filterEmployees.map( (data) => {
                    console.log(data)
                    return(
                        <tr key = {data.login.uuid}>
                            <td className = "align-middle">
                                <img src = {data.picture.thumbnail} alt = "profile image"/>
                            </td>
                            <td className = "align-middle">
                                {data.name.first} {data.name.last}
                            </td>
                            <td className = "align-middle">
                                {data.cell}
                            </td>
                            <td className = "align-middle">
                                <a href = {"mailto: " + data.email}>
                                    {data.email}
                                </a>
                            </td>
                            <td className = "align-middle">
                                {data.dob.age}
                            </td>
                        </tr>
                        )
                })} 
            </div>   
        )
    }



}

export default Body