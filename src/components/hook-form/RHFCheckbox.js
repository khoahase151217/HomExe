import PropTypes from 'prop-types';
// form
import { Controller } from 'react-hook-form';
// @mui
import { Checkbox, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
};

export function RHFCheckbox({ name, control, ...other }) {
    return (
        <FormControlLabel
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => <Checkbox {...field} checked={field.value} />}
                />
            }
            {...other}
        />
    );
}
