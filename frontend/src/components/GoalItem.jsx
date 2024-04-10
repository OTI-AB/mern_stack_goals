import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { IoMdCloseCircleOutline } from 'react-icons/io';

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
}

export default GoalItem;