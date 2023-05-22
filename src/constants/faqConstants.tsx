/* eslint-disable max-len */
import React from 'react';

import CCBillPayment from 'assets/images/cc_bill_payment.png';
import { globalStyles } from 'styles/classes';
import { openUrl } from 'utils/nativeHandler';

export interface UrlProps {
	url: string;
}

const Url: React.FC<UrlProps> = ({ url }) => {
	return (
		<>
			<span style={globalStyles.underline} onClick={() => openUrl(url)}>
				{url}
			</span>
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const faqs = (limits = {}, lender = '') => ({
	'Postpe Bill Payments': {
		img: CCBillPayment,
		faqs: {
			BBPS: [
				{
					title: `Why should I pay my utility bills on postpe?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								You get up to 30 days of credit when you use your postpe limit for utility bill payments and recharges.
							</p>
						</>
					),
				},
				{
					title: `How do I pay my utility bills on postpe?`,
					content: (
						<>
							<p style={globalStyles.mr5}> For utility bill payments and recharges on postpe:</p>
							<p style={globalStyles.mr5}>- Tap on the utility bill payments banner on the postpe home screen</p>
							<p style={globalStyles.mr5}>- Select the utility bill payment/ recharge category</p>
							<p style={globalStyles.mr5}>- Enter your details</p>
							<p style={globalStyles.mr5}>- Enter amount</p>
							<p style={globalStyles.mr5}>
								- Complete payment with device authorisation for easy payment of your utility bills
							</p>
						</>
					),
				},
				{
					title: `Are there any charges for paying utility bills on postpe?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								Yes, you will be charged up to 2% fee if you pay bills for the following categories with your postpe
								limit: Clubs and Associations, Credit Card, Donation, Loan, Recurring Deposit, Rental Payment,
								Subscription.
								<br /> No fees will be levied on the remaining categories.
							</p>
						</>
					),
				},
				{
					title: `What are the available payment modes for utility bill payments and recharges?`,
					content: (
						<>
							<p style={globalStyles.mr5}>You can only use your postpe limit for utility bill payments and recharges</p>
						</>
					),
				},
				{
					title: `Do I earn cashback for making utility bill payments on postpe?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								Yes, you can earn cashback on your first transaction for each of the following categories every month:
							</p>
							<p style={globalStyles.mr5}>- Mobile prepaid (minimum bill: ₹200)</p>
							<p style={globalStyles.mr5}>- DTH (minimum bill: ₹300)</p>
							<p style={globalStyles.mr5}>- Mobile postpaid (minimum bill: ₹500)</p>
							<p style={globalStyles.mr5}>- LPG (minimum bill: ₹800)</p>
							<p style={globalStyles.mr5}>- Electricity (minimum bill: ₹2,000)</p>
							<p style={globalStyles.mr5}>
								You can earn upto ₹160 per month when you pay for your utility bills and recharges on postpe. Your
								cashback earning will be capped at ₹1,000 in a month across the postpe app.
							</p>
						</>
					),
				},
				{
					title: `When will the bill payment/ recharge reflect in my account?`,
					content: (
						<>
							<p style={globalStyles.mr5}>The payment should reflect in your account within 3 working days.</p>
						</>
					),
				},
				{
					title: `My postpe limit was debited, but the utility bill payment/ recharge failed. What should I do?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								In case the payment fails, the debited amount will be refunded to your postpe limit within 1 working
								day.
							</p>
						</>
					),
				},
				{
					title: `Why is my utility bill payment/ recharge pending?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								The payment may go into pending state due to technical issues. In case the transaction fails debited
								amount will be refunded to your postpe limit within 4 working days.
							</p>
						</>
					),
				},
				{
					title: `Why is the payment not reflecting in my account even after a successful 
          utility bill payment/ recharge?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								Your biller may take up to 3 working days to reflect the payment in your account. Please pay your bill
								at least 3 working days before your due date to avoid any late fees.
							</p>
						</>
					),
				},
				{
					title: `I accidently made a payment for a wrong account. Can I get a refund?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								No, once a bill payment is made, it cannot be cancelled or refunded. You may reach out to your biller
								for further assistance.
							</p>
						</>
					),
				},
				{
					title: `I mistakenly entered the wrong bill amount and paid my bill. What should I do?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								Once a bill payment is made, it cannot be cancelled or refunded. You may reach out to your biller for
								further assistance.
							</p>
						</>
					),
				},
				{
					title: `I cannot find my biller on postpe. How do I make a bill payment/ recharge?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								Currently, you can make a utility bill payment for only the listed billers as displayed on the postpe
								app. It is possible that your biller is presently not listed on postpe. Please reach out to postpe if
								your biller is not presently listed on the app.
							</p>
						</>
					),
				},
				{
					title: `I cannot find my account details under my biller on postpe. How do I make the  
          utility bill payment/ recharge?`,
					content: (
						<>
							<p style={globalStyles.mr5}>
								Please confirm whether the entered details are correct including the chosen biller and account number,
								among other required details. If you still cannot find your account under the chosen biller, you may
								reach out to your biller for further assistance.
							</p>
						</>
					),
				},
				{
					title: `Can I prepay my 
          utility bills using my postpe limit?`,
					content: (
						<>
							<p style={globalStyles.mr5}>Depending on your biller and bill type, you may prepay your bill.</p>
						</>
					),
				},
			],
		},
	},
});

export default faqs;
