import React, { useState } from "react";

function Form({ControlNewData}) {

    const [formData, setFormData] = useState({description:"", category: "", amount: "", date: ""} )



    function ControlDifference(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function ControlSubmit(e){
        e.preventDefault()
        setFormData({description:"", category: "", amount: "", date: ""})


        ControlNewData(formData) 
    }



  return(
  <form className="" onSubmit={ControlSubmit} style={{ border: "2px solid black" }}>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", fontFamily: "sans-serif"}}>
      <div className="col-md-3 p-1 ">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={ControlDifference}
          required
        />
      </div>

      <div className="col-md-3 p-1">
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={ControlDifference}
          required
        />
      </div>

      <div className="col-md-3 p-1">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          name="amount"
          value={formData.amount}
          onChange={ControlDifference}
          required
        />
      </div>

      <div className="col-md-3 d-flex align-items-center">
        <label className="me-2"></label>
        <input type="date" className="form-control" name="date" 
        value={formData.date}
        onChange={ControlDifference}
        required />
      </div>
    </div>

    <button
      type="submit"
      className="btn btn-secondary col-md-2 mx-auto d-block mt-3">
      Add New Transaction
    </button>
  </form>
  )


}
export default Form;