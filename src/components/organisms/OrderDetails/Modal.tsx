import React, { useEffect, useState } from 'react';

import { Button, TextField, Typography } from '@mui/material';

import AlertMsg from 'components/atoms/Alert';
import Modal from 'components/atoms/Modal';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

interface EditDetailsModalProps {
	placeholder: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	onClose: () => void;
	regex: RegExp;
	inputType: string;
}

const EditDetailsModal: React.FC<EditDetailsModalProps> = ({
	onClose,
	value,
	setValue,
	placeholder,
	regex,
	inputType,
}) => {
	const [inputValue, setInputValue] = useState(value);
	const [error, setError] = useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

	const handleButtonClick = () => {
		if (!regex?.test(inputValue)) {
			return setError(true);
		}

		setValue(inputValue);
		onClose();
	};

	useEffect(() => {
		if (error) {
			setError(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue]);

	return (
		<Modal onClose={onClose} title="">
			<Typography
				component="p"
				sx={cx(globalStyles.fontMedium, globalStyles.fs18, globalStyles.mrT5, globalStyles.mrB15)}>
				edit your {placeholder}
			</Typography>

			<TextField
				value={inputValue}
				onChange={handleInputChange}
				fullWidth
				sx={{ marginBottom: '1rem' }}
				type={inputType}
			/>
			{error && (
				<AlertMsg
					severity="error"
					message={`Invalid ${placeholder}`}
					sx={{ padding: '10px !important', borderRadius: '7px !important', marginBottom: '1rem' }}
				/>
			)}

			<AlertMsg
				noBackground
				sx={{ padding: `0px !important`, marginBottom: '1rem' }}
				severity="info"
				message={`a valid ${placeholder} is needed for assured delivery of your voucher.`}
			/>

			<Button color="primary" variant="contained" onClick={handleButtonClick}>
				Update {placeholder}
			</Button>
		</Modal>
	);
};

export default EditDetailsModal;
