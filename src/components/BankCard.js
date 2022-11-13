import { Box } from '@mui/material';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import QRCode from 'src/_mock/QR-CODE.jpg';

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
            VU THI NGOC HA
            <br />
            19036492028016
            <br />
          <img width="100%" height="100%" src={QRCode}/>

          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
