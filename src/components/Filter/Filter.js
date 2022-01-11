import { useDispatch } from 'react-redux';

import contactActions from '../../redux/contact/contact-actions';

import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(contactActions.changeFilter(e.target.value));
  };

  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        className={s.filterInput}
      />
    </label>
  );
}

export default Filter;
