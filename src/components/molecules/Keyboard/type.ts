export type KeyValueType = number | string | React.ReactElement;

export interface IKeyboardProps {
  keyboardDisabled: boolean;
  keyboardTapCallback: (key: string | number) => void;
  longPressCallback: () => void;
}
