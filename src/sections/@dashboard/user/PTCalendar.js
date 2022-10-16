import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, toast } from '@mobiscroll/react';
import { Card, Container, Box } from '@mui/material';

const CALENDAR_CUSTOMER_ = [];

const DURATION = [
    {
        start: 'T07:00:00.000Z',
        end: 'T08:30:00.000Z',
    },
    {
        start: 'T09:00:00.000Z',
        end: 'T10:30:00.000Z',
    },
    {
        start: 'T14:00:00.000Z',
        end: 'T15:30:00.000Z',
    },
    {
        start: 'T16:00:00.000Z',
        end: 'T17:30:00.000Z',
    },
];

const DAY = ['2022-10-17', '2022-10-18', '2022-10-19', '2022-10-20', '2022-10-21', '2022-10-22'];

const COLOR = [
    '#766CCC',
    '#D16ABF',
    '#FF759F',
    '#FF987A',
    '#FFC863',
    '#F9F871',
    '#22CF31',
    '#00B86B',
    '#009E88',
    '#00818E',
    '#00647C',
    '#2F4858',
];

function getScheduleToken() {
    for (let i = 0; i < DAY.length; i++) {
        for (let j = 0; j < DURATION.length; j++) {
            let tmp1 = DAY[i] + DURATION[j].start;
            let tmp2 = DAY[i] + DURATION[j].end;
            CALENDAR_CUSTOMER_.push({
                start: tmp1,
                end: tmp2,
                title: 'Classroom ' + j + 'H' + i,
                color: COLOR[(i * 4 + j) % 12],
            });
            // console.log({
            //     start: tmp1,
            //     end: tmp2,
            //     title: 'Classroom ' + j + 'H' + i,
            //     color: COLOR[(i * j) % 12],
            // });
        }
    }
}
getScheduleToken();

function PTCalendar() {
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        setEvents(CALENDAR_CUSTOMER_);
    });

    // getScheduleToken();

    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title,
        });
    }, []);

    const view = React.useMemo(() => {
        return {
            schedule: { type: 'week' },
        };
    }, []);

    return (
        <Container
            sx={{
                borderRadius: '10px',
                mb: 2,
                mt: 3,
            }}
        >
            <Box
                height="500px"
                sx={{
                    borderRadius: '10px',
                }}
            >
                <Eventcalendar
                    theme="ios"
                    themeVariant="light"
                    clickToCreate={false}
                    dragToCreate={false}
                    dragToMove={false}
                    dragToResize={false}
                    eventDelete={false}
                    data={myEvents}
                    view={view}
                    onEventClick={onEventClick}
                />
            </Box>
        </Container>
    );
}

export default PTCalendar;
