import UapdatedComponent from "./HOC";
function Person1({ money, handleIncrease }) {
  return (
    <div>
      <h2>Hashimi is Offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default UapdatedComponent(Person1);
