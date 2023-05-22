import React, { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Card from 'components/molecules/Card';
import Screen from 'components/organisms/Screen';
import { ShortFaqStyle } from 'components/organisms/ShortFaqList/style';
import faqs from 'constants/faqConstants';
import { cx } from 'utils/classNames';
import ChangeHistory from '../../../utils/changeHistory';

const DetailedFAQ: React.FC = () => {
	const [activeItem, setActiveItem] = useState<number>(0);
	const [activeAccordion, setActiveAccordion] = useState<boolean>(false);

	const faqList = faqs()['Postpe Bill Payments']?.faqs?.BBPS;

	const onFaqClick = (index: number, title: string) => () => {
		setActiveItem(index);
		if (index === activeItem) setActiveAccordion(!activeAccordion);
		else setActiveAccordion(true);
	};

	const backHandler = () => {
		ChangeHistory({ action: 'back' });
	};

	return (
		<Screen
			headerDetails={{
				pageName: 'Send Money Pro',
				backHandler: backHandler,
			}}>
			<Card
				sx={(ShortFaqStyle.animated, ShortFaqStyle.fadeInRight, ShortFaqStyle.globalStyles.pd0, ShortFaqStyle.card)}>
				{faqList.map((faq: any, index: number) => (
					<Card
						key={index}
						onClick={onFaqClick(index, faq.title)}
						sx={cx(
							index !== faqList.length - 1
								? ShortFaqStyle.globalStyles.borderBottom
								: ShortFaqStyle.globalStyles.noBorder,
							ShortFaqStyle.faqItem,
							ShortFaqStyle.clickingAnimation,
							ShortFaqStyle.globalStyles.mr0,
						)}>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							sx={(ShortFaqStyle.globalStyles.w100, ShortFaqStyle.accordionHeader)}>
							<Typography
								variant="body1"
								sx={cx(ShortFaqStyle.faqTitle, ShortFaqStyle.globalStyles.fontMedium, ShortFaqStyle.globalStyles.fs14)}>
								{faq.title}
							</Typography>
							<ArrowForwardIosIcon
								sx={cx(
									activeItem === index && activeAccordion ? ShortFaqStyle.arrowRotate : {},
									ShortFaqStyle.globalStyles.transition,
									ShortFaqStyle.globalStyles.w8,
									ShortFaqStyle.arrowFontSize,
								)}
							/>
						</Box>
						<Box
							sx={
								activeItem === index && activeAccordion
									? (ShortFaqStyle.globalStyles.mh200, ShortFaqStyle.globalStyles.mrT10)
									: ShortFaqStyle.globalStyles.mh0
							}>
							<Typography sx={ShortFaqStyle.faqItemContent}>{faq.content}</Typography>
						</Box>
					</Card>
				))}
			</Card>
		</Screen>
	);
};

export default DetailedFAQ;
