import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import ActionButton from 'components/atoms/Button';
import { globalStyles } from 'styles/classes';
import { cx, IObjectType } from 'utils/classNames';

import SliderLottie from './SliderLottie';
import { styles } from './styles';

interface IProps {
	lottie?: string;
	text: string;
	ctaText: string;
	name?: string;
	index: number;
	url: string;
	colorIndex?: number;
	sx?: SxProps;
}

const bannerBgColor = [styles.pinkBanner, styles.blueBanner, styles.purpleBanner];
const DEFAULT_NAME = 'default';

const BannerTile: React.FC<IProps> = ({ lottie, text, index, ctaText, name, url, colorIndex, sx = {} }) => {
	return (
		<Card
			onClick={() => {}}
			sx={cx(
				styles.bannerTile,
				globalStyles.dspFl,
				globalStyles.alignCenter,
				// globalStyles.mrT20,
				colorIndex ? bannerBgColor[colorIndex] : name === DEFAULT_NAME ? bannerBgColor[2] : bannerBgColor[index % 3],
				sx as IObjectType,
			)}>
			<Grid item container direction="column" xs={7}>
				<Typography
					sx={cx(
						globalStyles.fs15,
						globalStyles.mrB15,
						globalStyles.lh20,
						globalStyles.clrWhite,
						globalStyles.fontRegular,
					)}
					dangerouslySetInnerHTML={{ __html: text }}
				/>

				<div>
					{name === DEFAULT_NAME ? null : (
						<ActionButton
							sx={cx(
								globalStyles.bgWhite,
								globalStyles.noBorder,
								styles.bannerButton,
								globalStyles.uppercase,
								styles.backgroundC,
							)}
							variant="outlined">
							{ctaText}
						</ActionButton>
					)}
				</div>

				{name !== DEFAULT_NAME && (
					<Typography
						sx={cx(
							globalStyles.fs11,
							globalStyles.lh20,
							globalStyles.clrWhite,
							globalStyles.fontRegular,
							globalStyles.mrT10,
						)}>
						*t&c apply
					</Typography>
				)}
			</Grid>
			<Grid item container xs={5} sx={styles.logoContainer}>
				<SliderLottie height="90%" width="90%" lottieCdnPath={lottie} />
			</Grid>
		</Card>
	);
};

export default BannerTile;
