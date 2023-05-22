import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function PageSizeCustomOptions() {
	const { data } = useDemoData({
		dataSet: 'Commodity',
		rowLength: 4,
		maxColumns: 4,
	});
	
	const data2: any = {
		id: {
			field: 'id',
			hide: true,
		},
		columns: [
			{ field: 'date', headerName: 'Date' },
			{ field: 'name', headerName: 'Name' },
			{ field: 'status', headerName: 'Status' },
			{ field: 'bonus', headerName: 'Bonus' },
		],
		initialState:{
			columns: {columnVisibilityModel:{id:false}},
		},
		rows: [
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15263', date: '20-05-23', name:'Abhinav', status:'Onboarded', bonus:"100"},
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15265', date: '20-05-23', name:'Simran', status:'Onboarded', bonus:"100"},
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15266', date: '20-05-23', name:'Jatin', status:'Pending', bonus:"0"},
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15268', date: '20-05-23', name:'Shilpi', status:'Not Eligilbe', bonus:"0"},
		],
	};
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				{...data2}
				initialState={{
					...data2.initialState,
					pagination: { paginationModel: { pageSize: 5 } },
				}}
				pageSizeOptions={[5, 10, 25]}
			/>
		</div>
	);
}
