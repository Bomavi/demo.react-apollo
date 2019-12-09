/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Button, { ButtonProps } from '@material-ui/core/Button';

/* local imports: common */
import { useStyles } from './styles';

export interface LoginButtonProps {
	gradient: 'primary' | 'secondary';
	marginTop?: number;
}

const LoginButton: React.FC<LoginButtonProps & ButtonProps> = React.memo(props => {
	const { children, gradient, marginTop = 0, ...restProps } = props;

	const classes = useStyles({ marginTop, gradient });

	return (
		<Button className={classes.button} {...restProps}>
			{children}
		</Button>
	);
});

export { LoginButton };
