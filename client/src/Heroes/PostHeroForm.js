import React from 'react';

const PostHeroForm = (props, context) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Post a New Super Hero</h3>
        <input onChange={(event) => props.updateName(event)} type='text' placeholder='Enter Name'/>
        <input onChange={(event) => props.updateUniverse(event)} type='text' placeholder='Enter Universe'/>
        <input onChange={(event) => props.updateSuperPower(event)} type='text' placeholder='Enter Super Power'/>
        <input onChange={(event) => props.updateEvil(event)} type='text' placeholder='True/False'/>
        <input onChange={(event) => props.updateRank(event)} type='text' placeholder='Enter Rank'/>
        <input onChange={(event) => props.updateImage(event)} type='text' placeholder='Enter URL of Image'/>
        <button type='submit'>Post</button>
    </form>
  </div>
)

PostHeroForm.contextTypes={
  loadUserFromServer: React.PropTypes.func
}

export default PostHeroForm;
