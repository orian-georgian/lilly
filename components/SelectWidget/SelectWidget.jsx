import { Select, MultiSelect } from "@mantine/core";
import { MdOutlineExpandMore } from "react-icons/md";

export default function SelectWidget({ value, isMulti, ...rest }) {
  let rightSection;

  if (!value || (Array.isArray(value) && !value?.length)) {
    rightSection = <MdOutlineExpandMore color="#000000" />;
  }

  if (isMulti) {
    return <MultiSelect {...{ ...rest, value, rightSection }} clearable />;
  }

  return <Select {...{ ...rest, value, rightSection }} clearable />;
}
