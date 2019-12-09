/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { IconProps, InputButton } from 'views/elements';

/* root imports: common */
import { removeSpaces } from 'utils/helpers';

/* local imports: common */
import { useStyles } from './styles';

export interface CustomInputProps {
	icon?: IconProps;
	placeholder?: string;
	defaultValue?: string;
	autoFocus?: boolean;
	isFetching?: boolean;
	onClick?: (value: string) => void;
	onChange?: (value: string) => void;
	onCancel?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = React.memo(props => {
	const {
		icon,
		placeholder,
		defaultValue,
		isFetching = false,
		autoFocus = false,
		onClick,
		onCancel,
		onChange,
	} = props;

	const classes = useStyles();

	const [inputValue, setInputValue] = React.useState('');

	const trimedValue = React.useMemo(() => {
		return removeSpaces(inputValue).trim();
	}, [inputValue]);

	const isEmpty = React.useMemo(() => {
		return !trimedValue || trimedValue === defaultValue;
	}, [defaultValue, trimedValue]);

	const value = React.useMemo(() => inputValue || defaultValue || inputValue, [
		defaultValue,
		inputValue,
	]);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setInputValue(value);
	};

	const clearHandler = React.useCallback(() => {
		setInputValue('');
	}, []);

	const actionClickHandler = () => {
		if (onClick) onClick(trimedValue);
		if (onCancel) onCancel();
		clearHandler();
	};

	const keyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && onClick) {
			if (trimedValue) onClick(trimedValue);
			if (onCancel) onCancel();
			if (!onCancel) clearHandler();
		}

		if (e.key === 'Escape' && onCancel) onCancel();
	};

	React.useEffect(() => {
		if (onChange) onChange(trimedValue);
	}, [onChange, trimedValue]);

	return (
		<div className={classes.root}>
			{icon && (
				<InputButton
					icon={icon}
					isFetching={isFetching}
					color={onClick ? 'primary' : 'inherit'}
					title={icon.title}
					disabled={onClick && isEmpty}
					onClick={onClick && actionClickHandler}
				/>
			)}
			{icon && <Divider className={classes.divider} />}
			<InputBase
				className={classes.input}
				placeholder={placeholder}
				value={value}
				autoFocus={autoFocus}
				onChange={changeHandler}
				onKeyUp={keyPressHandler}
			/>
			{(!isEmpty || onCancel) && <Divider className={classes.divider} />}
			{!isEmpty && !onCancel && (
				<InputButton
					icon={{ name: 'close' }}
					title="Clear"
					onClick={clearHandler}
				/>
			)}
			{onCancel && (
				<InputButton icon={{ name: 'close' }} title="Cancel" onClick={onCancel} />
			)}
		</div>
	);
});

export { CustomInput };
