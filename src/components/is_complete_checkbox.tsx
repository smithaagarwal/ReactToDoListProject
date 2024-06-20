export interface IsCompleteCheckboxProps {
  isChecked: boolean;
  handleCheckBox: () => Promise<void>;
}
const IsCompleteCheckbox: React.FC<IsCompleteCheckboxProps> = ({
  isChecked,
  handleCheckBox,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="isComplete"
        name="isComplete"
        checked={isChecked}
        onChange={handleCheckBox}
      ></input>
    </>
  );
};

export default IsCompleteCheckbox;
