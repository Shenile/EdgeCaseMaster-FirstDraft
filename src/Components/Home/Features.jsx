import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const features = [
  "Instant Coding Environment : Write your code and see the results immediately.",
  "Custom Test Cases : Create and test your own test cases to ensure your code handles every scenario.",
  "Edge Case Analysis : Get insights and suggestions on potential edge cases your code might encounter.",
  "Robust Code Development : Enhance your coding skills by learning to write code that withstands all edge cases."
];

function FeatureList() {
  return (
    <ul className="list-disc list-inside text-lg space-y-2">
      {features.map((feature, index) => (
        <p key={index} className='text-base'>
          <FontAwesomeIcon icon={faChevronRight} className='mx-2 text-red-500' />
          {feature}
        </p>
      ))}
    </ul>
  );
}

export default FeatureList;
