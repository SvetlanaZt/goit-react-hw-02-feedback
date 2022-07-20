import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (   <div>
        {options.map(item => (
          <button className={css.buttons}
            type="button"
            name={item}
            key={item}
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        ))}
        </div>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};