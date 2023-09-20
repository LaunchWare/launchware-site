export interface ContactInquiryFormValues {
  name: string;
  organization: string;
  email: string;
  phone: string;
  projectDescription: string;
  inquiryLeadType:
    | "How did you hear about us?"
    | "From a client of LaunchWare"
    | "From an alum of Launch Academy";
}
