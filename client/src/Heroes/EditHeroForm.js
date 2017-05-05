import React from 'react';
require('bootstrap/dist/css/bootstrap.css')

const EditHeroForm = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>Hero Name</label>
        <input type="text" className="form-control"
         value={props.name} placeholder="Name"
         onChange={(event) => props.updateField('name', event.target.value)}
         />
      </div>
      <div className="form-group">
        <label >What Universe is the Hero In?</label>
        <input type="text" className="form-control"
        value={props.universe} placeholder="Universe"
        onChange={(event) => props.updateField('universe', event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Evil?</label>
        <input type="text" className="form-control"
        value={props.evil} placeholder="true/false"
        onChange={(event) => props.updateField('evil', event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Rank?</label>
        <input type="text" className="form-control"
        value={props.rank} placeholder="Rank"
        onChange={(event) => props.updateField('rank', event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Image URL?</label>
        <input type="text" className="form-control"
        value={props.img} placeholder="URL"
        onChange={(event) => props.updateField('img', event.target.value)}
        />
      </div>

      <div className="col-md-12">
        <div className="row">
          <div className="powerList">
            {props.superPowers.map((power, index) => <h3 key={index}>{power}</h3>)}
          </div>
          <input
          type="text"
          placeholder="Please enter hero power."
          onChange={event => props.updateField("newPower", event.target.value)}
          />
        </div>
      <div className="row">
        <button
        onClick={event => props.updatePowers(event)}
        className="btn btn-default"
        >
        Add Power +
        </button>
        <button
        onClick={event => props.removePower(event)}
        className="btn btn-default"
        >
        Remove Power -
        </button>
        </div>
      </div>


      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
)

export default EditHeroForm;
