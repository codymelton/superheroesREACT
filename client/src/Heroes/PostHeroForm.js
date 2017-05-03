import React from 'react';

const PostHeroForm = (props) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Post a New Super Hero</h3>
        <input onChange={(event) => props.updateName(event)} type='text' placeholder='Enter Name'/>
        <input onChange={(event) => props.updateUniverse(event)} type='text' placeholder='Enter Universe'/>
        <button type='submit'>Post</button>
    </form>
  </div>
)

export default PostHeroForm;
