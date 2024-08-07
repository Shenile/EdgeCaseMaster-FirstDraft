import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



function FeatureList({contents}) {
  return (
    <ul className="list-disc list-inside text-lg space-y-2">
      {contents.map((content, index) => (
        <p key={index} className='text-base'>
          <FontAwesomeIcon icon={faChevronRight} className='mx-2 text-red-500' />
          {content}
        </p>
      ))}
    </ul>
  );
}

export default FeatureList;
