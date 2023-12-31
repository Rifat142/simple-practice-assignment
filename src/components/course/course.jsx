
import PropTypes from 'prop-types';

const Course = ({course}) => {
    
    // console.log(course);
    const {title , cover_pic ,details , price ,credit_hours} = course;
    return (
        // card part start 

        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className='w-64 h-40 rounded-md' src={cover_pic} alt=""/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p> {details}</p>


          <div className='flex justify-between p-3'>

            <div>
            <p>Price {price} </p>
            </div>
            <div className='flex gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" />
            </svg>
            <p>Credit:{credit_hours}hr</p>
            </div>
            </div>
          <div className="card-actions justify-center">
          <button className="btn btn-primary w-64 text-white">Select</button>
          </div>
        </div>
      </div>
      
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
    
};

export default Course;