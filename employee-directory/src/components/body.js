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
        let sortableItems = [...this.state.employees];
        console.log(this.state.sortOrder);
        if(this.state.sortOrder === "desc"){
            this.setState({sortOrder: "asc"}, () => {
                sortableItems.sort(this.nestedSort("name", "first"));
                console.log(sortableItems);
                this.setState({
                    filterEmployees: sortableItems
                })
            })
        } else {
            this.setState({sortOrder: "desc"}, () => {
                sortableItems.sort(this.nestedSort("name", "first", "desc"));
                console.log(sortableItems);
                this.setState({
                    filterEmployees: sortableItems
                })
            })
        }
    }

    nestedSort = (prop1, prop2 = null, direction = 'asc') => (e1, e2) => {
        const a = prop2 ? e1[prop1][prop2] : e1[prop1],
            b = prop2 ? e2[prop1][prop2] : e2[prop1],
            sortOrder = direction === "asc" ? 1 : -1
        return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
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