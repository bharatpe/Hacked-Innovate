import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { ROUTE_CONSTANT } from 'constants/routesConstants';
import ChangeHistory from 'utils/changeHistory';

const SearchField = () => {
	const handleTextFieldClick = () => ChangeHistory({ action: 'push', path: ROUTE_CONSTANT.VOUCHERS.SEARCH });

	return (
		<TextField
			value=""
			// disabled={true}
			onChange={() => {}}
			onClick={handleTextFieldClick}
			fullWidth
			placeholder="search brand by name"
			InputProps={{
				endAdornment: <SearchIcon />,
			}}
		/>
	);
};

export default SearchField;
