export interface ContactInquiryFormValues {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  projectDescription: string;
  "form-name": string;
  inquiryLeadType:
  | "How did you hear about us?"
  | "From a client of LaunchWare"
  | "From an alum of Launch Academy";
}
