import React from 'react';
import { connect } from "react-redux";
import CommentList from './CommentList';
import FormAddComment from './FormAddComment';

function Comments(props) {
  return (
    <section className='comments'>
      <h2 className='comments__heading'>16 модуль, React - redux</h2>
      <FormAddComment />
      <CommentList comments={props.comments} className='comment__list' />
    </section>
  )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, null)(Comments);