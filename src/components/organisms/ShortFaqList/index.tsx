import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Card from 'components/molecules/Card';
import { ShortFaqStyle } from './style';
import { IShortFaqProps } from './type';
import { SET_FAQ } from 'slices';
import { globalStyles } from 'styles/classes';
import { IDispatcherType } from 'types';
import ChangeHistory from 'utils/changeHistory';
import { cx } from 'utils/classNames';

const ShortFaqList: React.FC<IShortFaqProps> = ({ faqCategory, faqList, transactionDetails, faqSubType }) => {
	const dispatch = useDispatch<IDispatcherType>();
	const [activeItem, setActiveItem] = useState<number | 0>();
	const [activeAccordion, setActiveAccordion] = useState(false);

	const onViewAllClick = () => {
		dispatch(
			SET_FAQ({
				payload: {
					childFaq: faqSubType,
					parentFaq: faqCategory,
				},
			}),
		);
		ChangeHistory({
			action: 'push',
			path: '/detailed-faq',
			routeState: transactionDetails,
		});
	};

	const onFaqClick = (index: number, title: string) => () => {
		setActiveItem(index);
		if (index === activeItem) setActiveAccordion(!activeAccordion);
		else setActiveAccordion(true);
	};

	return (
		<Grid sx={cx(globalStyles.mrT20)}>
			<Grid
				display="flex"
				justifyContent="space-between"
				alignItems={'center'}
				sx={cx(globalStyles.mrB10, globalStyles.pd5)}>
				<Typography sx={cx(globalStyles.fontHeavy, globalStyles.fs14, globalStyles.textCaseDefault)}>
					frequently asked questions
				</Typography>

				<Box display="flex" justifyContent="flex-end" alignItems="center">
					<Button
						variant="text"
						endIcon={<ArrowForwardIosIcon sx={ShortFaqStyle.arrowFBtn} />}
						sx={ShortFaqStyle.viewAll}
						onClick={onViewAllClick}>
						<Typography sx={ShortFaqStyle.viewAll}>view all</Typography>
					</Button>
				</Box>
			</Grid>

			<Card
				sx={(ShortFaqStyle.animated, ShortFaqStyle.fadeInRight, ShortFaqStyle.globalStyles.pd0, ShortFaqStyle.card)}>
				{faqList.map((faq, index) => (
					<Card
						key={index}
						onClick={onFaqClick(index, faq.title)}
						sx={cx(
							index !== 2 ? ShortFaqStyle.globalStyles.borderBottom : ShortFaqStyle.globalStyles.noBorder,
							ShortFaqStyle.faqBox,
							ShortFaqStyle.faqItem,
							ShortFaqStyle.clickingAnimation,
							ShortFaqStyle.globalStyles.mr0,
						)}>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							sx={(ShortFaqStyle.globalStyles.w100, ShortFaqStyle.accordionHeader, ShortFaqStyle.globalStyles.pd0)}>
							<Typography sx={ShortFaqStyle.faqTitle}>{faq.title}</Typography>
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
		</Grid>
	);
};
export default ShortFaqList;
