import React, { useState } from "react";
import "../styles/body.css"
import RadioForm from "./radioForm";
import ResultContainer from "./results.js"
import ResultContext from "../utils/ResultContext"
import db from "../db.json";

const styles = {
    bigPad:{
      minHeight: 80 
    },
    littlePad: {
        minHeight: 26
    },
    centerText:{
        textAlign: "center"
    },
    test: {
        backgroundColor: "red",
        height: 400
    }
  }
 
    function Body(){
        const [resultListState, setResultList] = useState({
            db: db,
            sort: sortList,
            filter: filterList
        })

        function sortList() {
            const sortedArray = resultListState.db.sort((a,b) => (a.Salary < b.Salary) ? 1: -1)
            console.log("Directory sorted by descending salary: " + JSON.stringify(sortedArray))
            return setResultList({...resultListState, db: sortedArray})
        }

        function filterList(){
            var filteredArray = resultListState.db.filter(function(employee) {
             return employee.position.toLowerCase().includes("manager") ;
            });
            console.log("Directory filtered to contain only management: " + JSON.stringify(filteredArray))
            return setResultList({...resultListState, db: filteredArray})
        }

    return (
        <ResultContext.Provider value={resultListState}>
            <div className="col-sm-12">
            </div>
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8 body-container">
                    <div className="row">
                        <div className="col-sm-12" style={styles.bigPad}>

                        </div>
                        <div className="col-sm-1">

                        </div>
                        <RadioForm
                        />
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-6 employee-card">
                            <ResultContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </ResultContext.Provider>
    )
}

export default Body