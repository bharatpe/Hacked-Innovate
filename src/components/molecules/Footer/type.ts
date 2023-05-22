type ButtonHandlerType = (
  evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export interface IFooterDetailsProps {
  buttonText?: string|undefined|any;
  buttonHandler?: ButtonHandlerType;
  buttonDisable?: boolean;
  buttonVariant?: 'outlined' | 'contained';
  firstButtonText?: string;
  firstButtonHandler?: ButtonHandlerType;
  firstButtonDisable?: boolean;
  firstButtonVariant?: 'outlined' | 'contained';
  secondButtonText?: string;
  secondButtonHandler?: ButtonHandlerType;
  secondButtonDisable?: boolean;
  secondButtonVariant?: 'outlined' | 'contained';
  customButtons?: React.ReactNode;
}
