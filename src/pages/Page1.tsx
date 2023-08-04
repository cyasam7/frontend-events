import { Card, TextField } from '@mui/material';

function Page1() {
	return (
		<div>
			<Card>
				<div className='p-4'>
					<TextField placeholder='Email' label='Email' />
				</div>
			</Card>
		</div>
	);
}

export default Page1;
