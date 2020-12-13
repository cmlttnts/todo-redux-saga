import { Select } from "antd";
import { DEFAULT_SORT, SORT_OPTIONS } from "utils";

const { Option } = Select;

const SortSelect = ({ onSortSelect }) => {
  return (
    <Select
      defaultValue={DEFAULT_SORT}
      onChange={optionKey => {
        onSortSelect(SORT_OPTIONS[optionKey]);
      }}>
      {Object.entries(SORT_OPTIONS).map(([key, option]) => (
        <Option key={key} value={key}>
          {option}
        </Option>
      ))}
    </Select>
  );
};
export default SortSelect;
