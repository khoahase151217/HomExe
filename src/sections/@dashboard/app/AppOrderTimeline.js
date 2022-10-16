import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent, Grid, Stack, Link, Box } from '@mui/material';
import {
    Timeline,
    TimelineDot,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
} from '@mui/lab';
// utils
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

AppOrderTimeline.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    list: PropTypes.array.isRequired,
};

const TitleStyle = styled(Link)({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
});

export default function AppOrderTimeline({ title, subheader, list, ...other }) {
    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <CardContent
                sx={{
                    '& .MuiTimelineItem-missingOppositeContent:before': {
                        display: 'none',
                    },
                }}
            >
                <Timeline>
                    {list.map((item, index) => (
                        <OrderItem key={item.id} item={item} isLast={index === list.length - 1} />
                    ))}
                </Timeline>
            </CardContent>
        </Card>
    );
}

// ----------------------------------------------------------------------

OrderItem.propTypes = {
    isLast: PropTypes.bool,
    item: PropTypes.shape({
        time: PropTypes.instanceOf(Date),
        title: PropTypes.string,
        type: PropTypes.string,
    }),
};

function OrderItem({ item, isLast }) {
    const { type, title, time } = item;
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot
                    color={
                        (type === 'order1' && 'primary') ||
                        (type === 'order2' && 'success') ||
                        (type === 'order3' && 'info') ||
                        (type === 'order4' && 'warning') ||
                        'error'
                    }
                />
                {isLast ? null : <TimelineConnector />}
            </TimelineSeparator>

            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1.5, mx: 3 }}>
                        {fDateTime(time)}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container sx={{ m: 3 }}>
                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                            <img
                                alt="register"
                                src="/static/courses/1.jpg"
                                style={{
                                    width: '321.33px',
                                    borderRadius: '10px',
                                }}
                            />
                            <Box>
                                <Typography variant="h6">
                                    {'Nhóm cơ : Ngực, Vai, Lưng, Bắp tay, Bụng, Mông đùi'}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {
                                        'Dụng cụ: Thảm tập, Bodyweight, Chai nước suối, Tạ đơn (nếu có)'
                                    }
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.disabled',
                                        overflow: 'hidden',
                                        WebkitLineClamp: 2,
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis venenatis metus in interdum. consectetur adipiscing elit. Proin mattis venenatis metus in interdum. Donec a dui gravida, ultrices turpis at, malesuada felis. Sed id interdum libero. Integer feugiat lectus in sapien imperdiet. Sed id interdum libero. Integer feugiat lectus in sapien imperdiet. Sed id interdum libero. Integer feugiat lectus in sapien imperdiet. '
                                    }
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            {/* <TimelineContent>
        <Typography variant="h4">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
        <Grid container sx={{ m: 3 }}>

          <Stack direction="row" justifyContent="space-between" spacing={2} >
            <img alt="register" src="/static/courses/1.jpg" style={{
              width: '321.33px',
              borderRadius: '10px',
            }} />
            <Box>
              <Typography variant="h6">
                {'Nhóm cơ : Ngực, Vai, Lưng, Bắp tay, Bụng, Mông đùi'}
              </Typography>
              <Typography variant="subtitle2">
                {'Dụng cụ: Thảm tập, Bodyweight, Chai nước suối, Tạ đơn (nếu có)'}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.disabled',
                  overflow: 'hidden',
                  WebkitLineClamp: 2,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis venenatis metus in interdum. consectetur adipiscing elit. Proin mattis venenatis metus in interdum. Donec a dui gravida, ultrices turpis at, malesuada felis. Sed id interdum libero. Integer feugiat lectus in sapien imperdiet'}
              </Typography>
            </Box>
          </Stack>
        </Grid>

      </TimelineContent> */}
        </TimelineItem>
    );
}
