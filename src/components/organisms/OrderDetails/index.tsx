import { useCallback, useEffect, useRef, useState } from 'react';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import MsgIcon from 'assets/icons/contact.svg';
import EditIcon from 'assets/icons/edit.svg';
import EmailIcon from 'assets/icons/email.svg';
import Card from 'components/molecules/Card';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import RegularImage from '../../atoms/RegularImage';
import EditDetailsModal from './Modal';
import { modalStyle } from './styles';

const phoneRegex = /^[0-9]{10}$/;
const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface Props {
	email: string;
	phone: string;
	setEmail: any;
	setPhone: any;
}
const OrderDetails: React.FC<Props> = ({ email, phone, setEmail, setPhone }) => {
	const [showModal, setShowModal] = useState(false);
	const [isEmailModal, setIsEmailModal] = useState(false);

	const handleEditEmail = () => {
		addEmailAdress();
	};

	const addEmailAdress = () => {
		setShowModal(true);
		setIsEmailModal(true);
	};

	return (
		<Box sx={cx(globalStyles.mrT10, globalStyles.mrB20)}>
			<Box sx={cx(globalStyles.pdL10, globalStyles.pdB15, globalStyles.pdT20)}>
				<Typography sx={cx(globalStyles.fs15, globalStyles.fontHeavy)}>deliver voucher to</Typography>
			</Box>

			<Card sx={{ padding: 0, marginBottom: '1rem' }}>
				<Grid container alignItems="flex-start" sx={{ padding: '20px', paddingBottom: email.length ? '10px' : '20px' }}>
					<Grid item xs={2}>
						<Box sx={cx(modalStyle.iconContainer, globalStyles.bgLightBlue)}>
							<RegularImage src={MsgIcon} sx={modalStyle.msgIcon} />
						</Box>
					</Grid>
					<Grid item xs={10}>
						<Typography component="p" sx={cx(globalStyles.fs13, globalStyles.fontMedium)}>
							{phone}
						</Typography>
						<Typography component="p" sx={cx(globalStyles.clrGray, globalStyles.fs11)}>
							SMS to mobile number
						</Typography>
					</Grid>
				</Grid>

				{email.length > 0 && (
					<>
						<hr style={cx(modalStyle.line)} />

						<Grid container alignItems="flex-start" sx={{ padding: '20px', paddingTop: '10px' }}>
							<Grid item xs={2}>
								<Box sx={cx(modalStyle.iconContainer, globalStyles.bgLightBlue)}>
									<RegularImage src={EmailIcon} sx={modalStyle.msgIcon} />
								</Box>
							</Grid>
							<Grid item xs={8}>
								<Typography component="p" sx={cx(globalStyles.fs13, globalStyles.fontMedium)}>
									{email}
								</Typography>
								<Typography component="p" sx={cx(globalStyles.clrGray, globalStyles.fs11)}>
									email id
								</Typography>
							</Grid>

							<Grid item xs={2} container alignItems="flex-start" justifyContent="flex-end">
								<img src={EditIcon} alt="edit-icon" style={cx(modalStyle.editIcon)} onClick={handleEditEmail} />
							</Grid>
						</Grid>
					</>
				)}
			</Card>

			{email.length === 0 && (
				<Box sx={cx(modalStyle.addEmail)}>
					<Button variant="outlined" size="small" onClick={addEmailAdress} startIcon={<AddCircleSharpIcon />}>
						<Typography sx={cx(globalStyles.fs13, globalStyles.fontHeavy, modalStyle.addEmail.text)}>
							Add email address
						</Typography>
					</Button>
				</Box>
			)}

			{showModal && (
				<EditDetailsModal
					onClose={() => setShowModal(false)}
					placeholder={isEmailModal ? 'email address' : 'phone number'}
					value={isEmailModal ? email : phone}
					setValue={isEmailModal ? setEmail : setPhone}
					regex={isEmailModal ? emailRegex : phoneRegex}
					inputType={isEmailModal ? 'text' : 'number'}
				/>
			)}
		</Box>
	);
};

export default OrderDetails;
