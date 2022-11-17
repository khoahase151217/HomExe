import { Box, Button, Link, Typography } from '@mui/material';
import { isNumber } from 'lodash';
// import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom/dist';

import { useSelector } from 'react-redux';

function Calendar({ index, linkMeet }) {
    const navigate = useNavigate();

    const userInfo = useSelector((state) => state?.auth?.userInfo);

    const SLOT_CATEGORIES = [
        '7:00, 9:30, Monday, Thursday',
        '09:30, 11:00, Monday, Thursday',
        '14:00, 15:30, Monday, Thursday',
        '15:30, 17:00, Monday, Thursday',
        '15:30, 17:00, Tuesday, Friday',
        '15:30, 17:00, Tuesday, Friday',
        '15:30, 17:00, Tuesday, Friday',
        '15:30, 17:00, Tuesday, Friday',
        '15:30, 17:00, Wednesday, Saturday',
        '15:30, 17:00, Wednesday, Saturday',
        '15:30, 17:00, Wednesday, Saturday',
        '15:30, 17:00, Wednesday, Saturday',
    ];
    const temp = [];

    const SLOT_COMPONENTS = [];
    if (isNumber(index.data)) {
        const data = SLOT_CATEGORIES[index.data];

        const dataArray = data?.split(',');

        const data1 = {
            start: dataArray[0],
            end: dataArray[1],
            date: dataArray[2],
        };
        const data2 = {
            start: dataArray[0],
            end: dataArray[1],
            date: dataArray[3],
        };

        SLOT_COMPONENTS.push(data1);
        SLOT_COMPONENTS.push(data2);

        // get calendar for pt
    } else {
        const indexArray = index.data;
        SLOT_CATEGORIES.forEach((element, index) =>
            indexArray.forEach((element2) => {
                if (element2 === index) {
                    temp.push(element);
                }
            })
        );

        temp.forEach((element) => {
            const dataArray = element?.split(',');
            const data1 = {
                start: dataArray[0],
                end: dataArray[1],
                date: dataArray[2],
            };
            const data2 = {
                start: dataArray[0],
                end: dataArray[1],
                date: dataArray[3],
            };

            SLOT_COMPONENTS.push(data1);
            SLOT_COMPONENTS.push(data2);
        });
    }

    const handleView = () => {
        navigate('/users', { replace: true });
    };

    //   const view = React.useMemo(() => {
    //     return {
    //       schedule: { type: 'week',startTime: '07:00',endTime: '17:00',  }
    //     };
    //   }, []);

    return (
        // <Container
        //   sx={
        //     {
        //       borderRadius: '10px',
        //       mb: 2,
        //       mt: 3,
        //     }
        //   }>
        //   <Box height="500px" sx={
        //     {
        //       borderRadius: '10px',
        //     }}>
        //       <a ref={ref} style={{display: 'none'}} />
        //     <Eventcalendar
        //     colors={"#aaa"}
        //       theme="ios"
        //       themeVariant="light"
        //       clickToCreate={false}
        //       dragToCreate={false}
        //       dragToMove={false}
        //       dragToResize={false}
        //       eventDelete={false}
        //       data={SLOT_COMPONENTS}
        //       view={view}
        //       onEventClick={onEventClick}
        //     />
        //   </Box>
        // </Container >
        <Box ml={5}>
            <Typography variant="h4" sx={{ mb: 3, mt: 3 }}>
                YOUR SCHEDULE:
            </Typography>
            Link Google Meet:
            <Link ml={1} href={linkMeet} target="_blank">
                {linkMeet}
            </Link>
            {SLOT_COMPONENTS?.map((slot, idx) => {

                return (
                    <Box key={idx}>
                        {slot.date} from {slot.start} to {slot.end}
                    </Box>
                );
            })}
            {userInfo.roleId == 2 && <Button onClick={() => handleView()}>View contracts</Button>}
        </Box>
    );
}

export default Calendar;
