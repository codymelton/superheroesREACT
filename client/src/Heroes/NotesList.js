import React from 'react';

const NotesList = (props) => (
  <div>
    <h4> Notes about this hero: </h4>
      {props.notes.map((item, index) => (
          <div key={ index }>
            <p> {item.content} </p>
          </div>
        ))
      }
  </div>
)

export default NotesList;
