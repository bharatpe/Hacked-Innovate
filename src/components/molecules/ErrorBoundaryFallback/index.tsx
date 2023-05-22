import React from 'react';
import Lottie from 'react-lottie';
import { FallbackProps } from 'react-error-boundary';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import Screen from 'components/organisms/Screen';
import useLottie from 'hooks/useLottie';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import { styles } from './styles';

const thinkingJson = 'https://d30gqtvesfc1d5.cloudfront.net/postpe/static/lottie/thinking.json';

const ErrorBoundaryFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
	const lottieConfig = useLottie(thinkingJson);

	return (
		<Screen sx={styles.screen}>
			<IconButton onClick={resetErrorBoundary} sx={styles.closeIconButton}>
				<CloseIcon sx={styles.closeIcon} />
			</IconButton>

			<Typography component="p" sx={styles.heading}>
				something went wrong!!
			</Typography>

			<Typography
				component="p"
				sx={cx(globalStyles.fontHeavy, globalStyles.fs36, globalStyles.mrT20, globalStyles.clrPrimary)}>
				try checking below possibility:
			</Typography>

			<List sx={styles.list}>
				{['Internet Connection Lost', 'Wrong details provider'].map((item) => (
					<ListItem key={item} sx={styles.listItem}>
						<Typography component="p" sx={cx(globalStyles.fs16, globalStyles.clrDisabled)}>
							{item}
						</Typography>
					</ListItem>
				))}
			</List>

			{lottieConfig?.animationData && <Lottie options={lottieConfig} />}
		</Screen>
	);
};

export default ErrorBoundaryFallback;
