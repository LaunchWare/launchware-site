import { FieldErrors } from "react-hook-form";

export const getFieldClassName = ({
  fieldName,
  errors,
  className,
  errorClassPrefix,
}: {
  fieldName: string;
  errors: FieldErrors;
  className: string;
  errorClassPrefix: string;
}) => {
  if (errors[fieldName]) {
    return `${className} ${errorClassPrefix}_error`;
  } else {
    return className;
  }
};
