import PropTypes from 'prop-types';

export default function Alert({message}){
  return(
    <div className="animate-bounce mt-14">
      <p className="text-lg text-center text-white">
        {message}
      </p>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
}