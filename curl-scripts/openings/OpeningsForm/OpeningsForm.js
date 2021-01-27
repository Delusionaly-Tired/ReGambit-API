import React from 'react'

const OpeningsForm = ({ openings, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      required
      placeholder='Enter openings title'
      // This name should line up with the state we want to change
      name='title'
      value={openings.title}
      onChange={handleChange}
    />
    <label>Director</label>
    <input
      required
      placeholder='Enter openings director'
      // This name should line up with the state we want to change
      name='director'
      value={openings.director}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)

export default OpeningsForm
