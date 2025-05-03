import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PropTypes from "prop-types";

export const BookFilter = ({ value, onChange }) => (
  <div className="w-full sm:w-40">
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full capitalize">
        {value}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="Own">Own</SelectItem>
        <SelectItem value="Reading">Reading</SelectItem>
        <SelectItem value="Wishlist">Wishlist</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

BookFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
