import React from 'react';

import { SxProps } from '@mui/material';
import Card from '@mui/material/Card';
import Grid, { GridProps } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import RegularImage from 'components/atoms/RegularImage';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import { styles } from './styles';

interface RequiredProps {
	image: string;
	brand: string;
}

interface Grid3xNProps<T extends RequiredProps> {
	gridItems: Array<T>;
	onClick: (param: T) => void;
	customComponent?: (param: T, index: number) => React.ReactNode;
	sx?: SxProps;
	gridProps?: GridProps;
	gridItemSx?: GridProps['sx'];
	index?: number;
}

const Grid3xN = <T extends RequiredProps>({
	gridItems,
	customComponent,
	onClick,
	index: parentIndex,
	sx = {},
	gridProps = {},
	gridItemSx,
}: Grid3xNProps<T>) => {
	return (
		<Card sx={{ ...styles.card, ...sx }}>
			<Grid container alignItems="stretch" {...gridProps}>
				{gridItems.map((item, index) => (
					<Grid
						item
						xs={4}
						key={`grid-3xn-item-${index}-${parentIndex}`}
						onClick={() => onClick(item)}
						container
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
						// @ts-ignore
						sx={{ ...styles.grid, ...gridItemSx }}>
						{customComponent ? (
							customComponent(item, index)
						) : (
							<>
								<RegularImage src={item.image} alt={item.brand} sx={styles.image} />
								<Typography
									component="p"
									sx={cx(
										globalStyles.fs11,
										globalStyles.fontLight,
										globalStyles.textCenter,
										globalStyles.w80,
										globalStyles.c1f,
									)}>
									{item.brand}
								</Typography>
							</>
						)}
					</Grid>
				))}
			</Grid>
		</Card>
	);
};

export default Grid3xN;
