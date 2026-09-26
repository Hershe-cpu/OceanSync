function ConditionCard({ title, value, unit }) {
  return (
    <div className="condition-card">
      <p>{title}</p>
      <h2>
        {value} <span>{unit}</span>
      </h2>
    </div>
  );
}

export default ConditionCard;