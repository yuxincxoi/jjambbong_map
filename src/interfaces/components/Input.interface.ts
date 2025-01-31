export default interface InputProps {
  type: string;
  placeholder: string;
  firstclassName?: string;
  secondclassName?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
