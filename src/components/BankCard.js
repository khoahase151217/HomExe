import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import QRCode from 'react-qr-code';

export default function BankCard({ bankName }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bankName}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            my: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Name: HomExe
            <br />
            19112204568866
          </Typography>
          <QRCode size={60} style={{ height: 'auto', maxWidth: '60px', width: '60px' }} value={'https://abc.com'} />
        </Box>
      </CardContent>
    </Card>
  );
}
