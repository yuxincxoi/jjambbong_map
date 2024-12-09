export default interface InputProps {
  placeholder: string;
  className?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
