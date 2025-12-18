// src/components/services/ProcessStep.jsx
import './ProcessStep.css';

const ProcessStep = ({ stepNumber, title, description }) => {
  return (
    <div className="process-step">
      <div className="step-number">
        <span>{stepNumber}</span>
      </div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;