import {
	LocalizationProvider,
	DateTimePicker,
	DateTimePickerProps,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { es } from 'date-fns/locale';
import React from 'react';

type OmitDateProps = Omit<DateTimePickerProps<Date>, 'renderInput'>;

interface IDateTimePickerProps extends OmitDateProps {
	helperText?: string;
	error?: boolean;
	format?: string;
	required?: boolean;
	onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	style?: React.CSSProperties;
}

const DateTImePicker: React.FC<IDateTimePickerProps> = (props) => {
	const { error, helperText, format, required, onBlur, style } = props;

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
			<DateTimePicker
				{...props}
				toolbarFormat={format ?? 'dd/MM/yyyy HH:mm'}
				inputFormat={format ?? 'dd/MM/yyyy HH:mm'}
				renderInput={(params: any) => (
					<TextField
						{...params}
						style={style}
						error={error}
						required={required}
						helperText={helperText}
						onBlur={onBlur}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};

export default DateTImePicker;
