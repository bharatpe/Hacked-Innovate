import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function Dashboard() {
	// const { data } = useDemoData({
	// 	dataSet: 'Commodity',
	// 	rowLength: 4,
	// 	maxColumns: 4,
	// });
	
	const data2: any = {
		id: {
			field: 'id',
			hide: true,
		},
		columns: [
			{ field: 'rank', headerName: 'Rank' },
			{ field: 'name', headerName: 'Name' },
			{ field: 'earning', headerName: 'Earning'},
			{ field: 'referral', headerName: 'Referral'},
		],
		initialState:{
			columns: {columnVisibilityModel:{id:false}},
		},
		rows: [
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15263', rank: '1.', name:'Abhinav', earning:"2450", referral:'16'},
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15265', rank: '2.', name:'Simran',  earning:"1250", referral:'10'},
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15266', rank: '3.', name:'Jatin',  earning:"400",referral:'4'},
			{ id: 'e7f1ece5-5281-536d-ac7a-df2906a15268', rank: '4.', name:'You', earning:"200", referral:'2'},
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
