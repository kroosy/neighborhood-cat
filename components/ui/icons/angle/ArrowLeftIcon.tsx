import { IconBaseProps } from "react-icons";
import { IoArrowBackOutline } from "react-icons/io5";

interface Props {
  props?: IconBaseProps;
}
export default function ArrowLeftIcon({ props }: Props) {
  return <IoArrowBackOutline className="w-7 h-7" {...props} />;
}
