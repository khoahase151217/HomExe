import PropTypes from 'prop-types';
// form
import { Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
    name: PropTypes.string,
};

export default function RHFTextField({ name, control, errors, ...other }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    fullWidth
                    value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
                    error={!!errors[name]}
                    helperText={errors[name]}
                    {...other}
                />
            )}
        />
    );
}
