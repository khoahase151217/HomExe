

import { Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Box, Container } from '@mui/material';
import { isNumber } from 'lodash';
import moment from 'moment';
import React, { useRef } from 'react';






function Calendar({index, linkMeet}) {

  const SLOT_CATEGORIES = [
    'T07:00:00.000Z,T09:30:00.000Z,1,4',
    'T09:30:00.000Z,T11:00:00.000Z,1,4',
    'T14:00:00.000Z,T15:30:00.000Z,1,4',
    'T15:30:00.000Z,T17:00:00.000Z,1,4',
    'T07:00:00.000Z,T09:30:00.000Z,2,5',
    'T09:30:00.000Z,T11:00:00.000Z,2,5',
    'T14:00:00.000Z,T15:30:00.000Z,2,5',
    'T15:30:00.000Z,T17:00:00.000Z,2,5',
    'T07:00:00.000Z,T09:30:00.000Z,3,6',
    'T09:30:00.000Z,T11:00:00.000Z,3,6',
    'T14:00:00.000Z,T15:30:00.000Z,3,6',
    'T15:30:00.000Z,T17:00:00.000Z,3,6',
  ];
  const temp = [];
  console.log("index", index);
  const SLOT_COMPONENTS = [];
  if(isNumber(index.data)){
   

    const data =SLOT_CATEGORIES[index.data];
    console.log (SLOT_CATEGORIES);
  
  
    const dataArray = data?.split(",");
    
    const SLOT_COMPONENTS = [
      {
        "start": moment().weekday(dataArray[2]).format('YYYY-MM-DD').concat(dataArray[0]),
        "end": moment().weekday(dataArray[2]).format('YYYY-MM-DD').concat(dataArray[1]),
        "title": linkMeet,
        "color": "#0288D1"
      },
      {
        "start": moment().weekday(dataArray[3]).format('YYYY-MM-DD').concat(dataArray[0]),
        "end": moment().weekday(dataArray[3]).format('YYYY-MM-DD').concat(dataArray[1]),
        "title": linkMeet,
        "color": "#0288D1"
    
      }
    ]
    console.log("slot", SLOT_COMPONENTS);

// get calendar for pt
  }else{
    const indexArray = index.data;
    SLOT_CATEGORIES.forEach((element,index) => indexArray.forEach(element2 => {

      if(element2 === index){
      temp.push(element);
    }}))
    console.log("SLOT", temp)

    temp.forEach(element => {
    const dataArray = element?.split(",");
    const data = [
      {
        "start": moment().weekday(dataArray[2]).format('YYYY-MM-DD').concat(dataArray[0]),
        "end": moment().weekday(dataArray[2]).format('YYYY-MM-DD').concat(dataArray[1]),
        "title": linkMeet,
        "color": "#0288D1"
      },
      {
        "start": moment().weekday(dataArray[3]).format('YYYY-MM-DD').concat(dataArray[0]),
        "end": moment().weekday(dataArray[3]).format('YYYY-MM-DD').concat(dataArray[1]),
        "title": linkMeet,
        "color": "#0288D1"
    
      }
    ]

    SLOT_COMPONENTS.push(data);
    })
    console.log("slot", SLOT_COMPONENTS);
  }


  


  const ref = useRef();

  const onEventClick = React.useCallback((event) => {
    ref.current.href=event.event.title;
    ref.current.target = '_blank';
    ref.current.click();
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: { type: 'week',startTime: '07:00',endTime: '17:00',  }
    };
  }, []);

  return (
    <Container
      sx={
        {
          borderRadius: '10px',
          mb: 2,
          mt: 3,
        }
      }>
      <Box height="500px" sx={
        {
          borderRadius: '10px',
        }}>
          <a ref={ref} style={{display: 'none'}} />
        <Eventcalendar
        colors={"#aaa"}
          theme="ios"
          themeVariant="light"
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={SLOT_COMPONENTS}
          view={view}
          onEventClick={onEventClick}
        />
      </Box>

    </Container >


  );
}

export default Calendar;