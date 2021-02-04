import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../store/actions/actions';

function FormAddComment(props) {
  let [comment, setComment] = useState('');
  let [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const id = Date.now();

    props.addComment({
      comment,
      author,
      id: id,
      date: (new Date(id)).toJSON()
    })
    setComment('');
    setAuthor('');
  };
  const handleChange = (event, setState) => {
    setState(event.target.value);
  };
  
  return (
      <form 
        className='comments__form form'
        onSubmit={handleSubmit}
      >
        <label className='form__comment'>
          Комментарий:&nbsp;
          <textarea 
            className='form__textarea' 
            name='comment' 
            value={comment}
            onChange={e => handleChange(e, setComment)}
            required
          />
        </label>
        <label>
          Имя автора:&nbsp;
          <input
            name='author'
            type='text'
            value={author}
            onChange={e => handleChange(e, setAuthor)}
            required
          />
        </label>
        <button type='submit'>Добавить</button>
      </form>
  )
}

const mapDispatchToProps = {
  addComment
}

export default connect(null, mapDispatchToProps)(FormAddComment);