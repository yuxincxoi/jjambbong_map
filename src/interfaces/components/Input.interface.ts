export default interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
