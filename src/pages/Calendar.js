// import React from "react";

// import { styled } from '@mui/material/styles';
// import { Card, Link, Container, Typography, Grid, Box, Avatar, Divider, Stack } from '@mui/material';
// import { Badge, Calendar } from "antd";
// import "antd/dist/antd.css";


// const Event = {
//     margin: 0,
//     padding: 0,
//     listStyle: 'none',
//   };
// const AntBadgeStatus ={
//     width: '100%',
//     overflow: 'hidden',
//     fontSize: '12px',
//     whiteSpace: 'nowrap',
//     textOverflow: 'clip',

//   };

//   const NoteMonths = {
//     fontSize: '28px',
//     textAlign: 'center',

//   };
//   const NoteMonthSection = {
//     fontSize: '28px',
//     textAlign: 'center',
//   };

// const getListData = (value) => {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         {
//           type: "th",
//           content: "7h30 - 8h45."
//         },
//         {
//           type: "success",
//           content: "Google meet link"
//         }
//       ];
//       break;
//     case 10:
//       listData = [
//         {
//           type: "warning",
//           content: "This is warning event. a aaaaaaaaaaaa"
//         },
//         {
//           type: "success",
//           content: "This is usual event."
//         },
//         {
//           type: "error",
//           content: "This is error event."
//         }
//       ];
//       break;
//     case 15:
//       listData = [
//         {
//           type: "warning",
//           content: "This is warning event"
//         },
//         {
//           type: "success",
//           content: "This is very long usual event。。...."
//         },
//         {
//           type: "error",
//           content: "This is error event 1."
//         },
//         {
//           type: "error",
//           content: "This is error event 2."
//         },
//         {
//           type: "error",
//           content: "This is error event 3."
//         },
//         {
//           type: "error",
//           content: "This is error event 4."
//         }
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// };
// const getMonthData = (value) => {
//   if (value.month() === 8) {
//     return 1394;
//   }
// };
// const App = () => {

//   const monthCellRender = (value) => {
//     const num = getMonthData(value);
//     return num ? (

//       <div className="notes-month">

//          <section>{num}</section>
//         <span>Backlog number</span>


//       </div>
//     ) : null;
//   };
//   const dateCellRender = (value) => {
//     const listData = getListData(value);
//     return (
//       <ul className="events">

//         {listData.map((item) => (
//           <div key={item.content}>
//             <Badge status={item.type} text={item.content} />
//           </div>
//         ))}

//       </ul>
//     );
//   };
//   return (
//     <Calendar
//       dateCellRender={dateCellRender}
//       monthCellRender={monthCellRender}
//     />
//   );
// };
// export default App;

import { Eventcalendar, toast } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Box, Container } from '@mui/material';
import moment from 'moment';
import React from 'react';




const CALENDAR_CUSTOMER_ = [
  // 1
  {
    "start": "2022-10-17T07:00:00.000Z",
    "end": "2022-10-17T08:30:00.000Z",
    "title": "1",
    "color": "#ff6d42"
  },
  {
    "start": "2022-10-17T09:00:00.000Z",
    "end": "2022-10-17T10:30:00.000Z",
    "title": "1",
    "color": "#913aa7"
  },
  {
    "start": "2022-10-17T14:00:00.000Z",
    "end": "2022-10-17T15:30:00.000Z",
    "title": "1",
    "color": "#de3d83"
  },
  {
    "start": "2022-10-17T16:00:00.000Z",
    "end": "2022-10-17T17:30:00.000Z",
    "title": "1",
    "color": "#37bbe4"
  },
  // 2
  {
    "start": "2022-10-20T07:00:00.000Z",
    "end": "2022-10-20T08:30:00.000Z",
    "title": "2",
    "color": "#ff6d42"
  },
  {
    "start": "2022-10-20T09:00:00.000Z",
    "end": "2022-10-20T10:30:00.000Z",
    "title": "2",
    "color": "#913aa7"
  },
  {
    "start": "2022-10-20T14:00:00.000Z",
    "end": "2022-10-20T15:30:00.000Z",
    "title": "2",
    "color": "#de3d83"
  },
  {
    "start": "2022-10-20T16:00:00.000Z",
    "end": "2022-10-20T17:30:00.000Z",
    "title": "2",
    "color": "#37bbe4"
  },

  // 3
  {
    "start": "2022-10-18T07:00:00.000Z",
    "end": "2022-10-18T08:30:00.000Z",
    "title": "3",
    "color": "#37bbe4"
  },
  {
    "start": "2022-10-18T09:00:00.000Z",
    "end": "2022-10-18T10:30:00.000Z",
    "title": "3",
    "color": "#bb0000"
  },
  {
    "start": "2022-10-18T14:00:00.000Z",
    "end": "2022-10-18T15:30:00.000Z",
    "title": "3",
    "color": "#a71111"
  },
  {
    "start": "2022-10-18T16:00:00.000Z",
    "end": "2022-10-18T17:30:00.000Z",
    "title": "3",
    "color": "#d7be0d"
  },
  // 4
  {
    "start": "2022-10-21T07:00:00.000Z",
    "end": "2022-10-21T08:30:00.000Z",
    "title": "4",
    "color": "#37bbe4"
  },
  {
    "start": "2022-10-21T09:00:00.000Z",
    "end": "2022-10-21T10:30:00.000Z",
    "title": "4",
    "color": "#bb0000"
  },
  {
    "start": "2022-10-21T14:00:00.000Z",
    "end": "2022-10-21T15:30:00.000Z",
    "title": "4",
    "color": "#a71111"
  },
  {
    "start": "2022-10-21T16:00:00.000Z",
    "end": "2022-10-21T17:30:00.000Z",
    "title": "4",
    "color": "#d7be0d"
  },

  // 5
  {
    "start": "2022-10-19T07:00:00.000Z",
    "end": "2022-10-19T08:30:00.000Z",
    "title": "5",
    "color": "#45ce7b"
  },
  {
    "start": "2022-10-19T09:00:00.000Z",
    "end": "2022-10-19T10:30:00.000Z",
    "title": "5",
    "color": "#f9c603"
  },
  {
    "start": "2022-10-19T14:00:00.000Z",
    "end": "2022-10-19T15:30:00.000Z",
    "title": "5",
    "color": "#a71111"
  },
  {
    "start": "2022-10-19T16:00:00.000Z",
    "end": "2022-10-19T17:30:00.000Z",
    "title": "5",
    "color": "#d7be0d"
  },







  {
    "start": "2022-10-15T11:00:00.000Z",
    "end": "2022-10-16T19:00:00.000Z",
    "title": "Friends binge marathon",
    "color": "#7bde83"
  }, {
    "start": "2022-10-22T11:00:00.000Z",
    "end": "2022-10-23T19:00:00.000Z",
    "title": "Friends binge marathon",
    "color": "#7bde83"
  }, {
    "start": "2022-10-15T07:00:00.000Z",
    "end": "2022-10-15T08:00:00.000Z",
    "title": "Product team mtg.",
    "color": "#913aa7"
  }, {
    "start": "2022-10-15T09:00:00.000Z",
    "end": "2022-10-15T10:00:00.000Z",
    "title": "Green box to post office",
    "color": "#6e7f29"
  }, {
    "start": "2022-10-15T12:00:00.000Z",
    "end": "2022-10-15T13:00:00.000Z",
    "title": "Lunch @ Butcher's",
    "color": "#bb0000"
  }, {
    "start": "2022-10-15T14:00:00.000Z",
    "end": "2022-10-15T15:00:00.000Z",
    "title": "Status Update Meeting",
    "color": "#00aabb"
  }, {
    "start": "2022-10-15T08:00:00.000Z",
    "end": "2022-10-15T09:00:00.000Z",
    "title": "Board meeting",
    "color": "#cfc014"
  }, {
    "start": "2022-10-15T18:00:00.000Z",
    "end": "2022-10-15T20:00:00.000Z",
    "title": "Pizza Night",
    "color": "#d7be0d"
  }, {
    "start": "2022-10-15T16:00:00.000Z",
    "end": "2022-10-15T17:00:00.000Z",
    "title": "Clever Conference",
    "color": "#a71111"
  }, {
    "start": "2022-10-14T06:45:00.000Z",
    "end": "2022-10-14T08:00:00.000Z",
    "title": "Quick mtg. with Martin",
    "color": "#de3d83"
  }, {
    "start": "2022-10-08T07:30:00.000Z",
    "end": "2022-10-08T08:30:00.000Z",
    "title": "Product team mtg.",
    "color": "#f67944"
  }, {
    "start": "2022-10-08T09:00:00.000Z",
    "end": "2022-10-08T09:45:00.000Z",
    "title": "Stakeholder mtg.",
    "color": "#a144f6"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 10,
      "day": 14
    },
    "allDay": true,
    "title": "Dexter BD",
    "color": "#37bbe4"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 10,
      "day": 25
    },
    "allDay": true,
    "title": "Luke BD",
    "color": "#37bbe4"
  }, {
    "recurring": {
      "repeat": "weekly",
      "weekDays": "WE"
    },
    "allDay": true,
    "title": "Employment (Semi-weekly)",
    "color": "#228c73"
  }, {
    "start": "2022-10-09T22:00:00.000Z",
    "end": "2022-10-14T22:00:00.000Z",
    "allDay": true,
    "title": "Sam OFF",
    "color": "#ca4747"
  }, {
    "start": "2022-10-17T22:00:00.000Z",
    "end": "2022-10-28T22:00:00.000Z",
    "allDay": true,
    "title": "Europe tour",
    "color": "#56ca70"
  }, {
    "start": "2022-02-06T23:00:00.000Z",
    "end": "2022-02-24T23:00:00.000Z",
    "allDay": true,
    "title": "Dean OFF",
    "color": "#99ff33"
  }, {
    "start": "2022-03-04T23:00:00.000Z",
    "end": "2022-03-13T23:00:00.000Z",
    "allDay": true,
    "title": "Mike OFF",
    "color": "#e7b300"
  }, {
    "start": "2022-05-06T22:00:00.000Z",
    "end": "2022-05-15T22:00:00.000Z",
    "allDay": true,
    "title": "John OFF",
    "color": "#669900"
  }, {
    "start": "2022-05-31T22:00:00.000Z",
    "end": "2022-06-10T22:00:00.000Z",
    "allDay": true,
    "title": "Carol OFF",
    "color": "#6699ff"
  }, {
    "start": "2022-07-01T22:00:00.000Z",
    "end": "2022-07-16T22:00:00.000Z",
    "allDay": true,
    "title": "Jason OFF",
    "color": "#cc9900"
  }, {
    "start": "2022-08-05T22:00:00.000Z",
    "end": "2022-08-13T22:00:00.000Z",
    "allDay": true,
    "title": "Ashley OFF",
    "color": "#339966"
  }, {
    "start": "2022-09-09T22:00:00.000Z",
    "end": "2022-09-19T22:00:00.000Z",
    "allDay": true,
    "title": "Marisol OFF",
    "color": "#8701a9"
  }, {
    "start": "2022-09-30T22:00:00.000Z",
    "end": "2022-10-11T22:00:00.000Z",
    "allDay": true,
    "title": "Sharon OFF",
    "color": "#cc6699"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 12,
      "day": 25
    },
    "allDay": true,
    "title": "Christmas Day",
    "color": "#ff0066"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 1,
      "day": 1
    },
    "allDay": true,
    "title": "New Year's day",
    "color": "#99ccff"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 4,
      "day": 1
    },
    "allDay": true,
    "title": "April Fool's Day",
    "color": "#ff6666"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 2
    },
    "allDay": true,
    "title": "File Form 720 for the third quarter",
    "color": "#147ea6"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 2
    },
    "allDay": true,
    "title": "File Form 730 and pay tax on wagers accepted during September",
    "color": "#a73a4e"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 2
    },
    "allDay": true,
    "title": "File Form 2290 and pay the tax for vehicles first used during September",
    "color": "#218e0d"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 2
    },
    "allDay": true,
    "title": "File Form 941 for the third quarter",
    "color": "#a67914"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 2
    },
    "allDay": true,
    "title": "Deposit FUTA owed through Sep if more than $500",
    "color": "#3c0707"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 30
    },
    "allDay": true,
    "title": "Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies",
    "color": "#14a618"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 30
    },
    "allDay": true,
    "title": "File Form 730 and pay tax on wagers accepted during October",
    "color": "#722ac1"
  }, {
    "recurring": {
      "repeat": "yearly",
      "month": 11,
      "day": 30
    },
    "allDay": true,
    "title": "File Form 2290 and pay the tax for vehicles first used during October",
    "color": "#256069"
  }];



function Calendar({index}) {

  const SLOT_CATEGORIES = [
    'T07:00:00.000Z,T09:30:00.000Z,1,4',
    'T09:30:00.000Z,T11:00:00.000Z,1,4',
    'T14:00:00.000Z,T15:30:00.000Z,1,4',
    'T15:30:00.000Z,T17:00:00.000Z,1,4',
    'T07:00:00.000Z,T09:30:00.000Z,2,5',
    'T09:30:00.000Z,T11:00:00.000Z,2,5',
    'T14:00:00.000Z,T15:30:00.000Z,2,5',
    'T15:30:00.000Z,T17:00:00.000Z,2,5',
    'T07:00:00.000Z,T09:30:00.000Z,4,7',
    'T09:30:00.000Z,T11:00:00.000Z,4,7',
    'T14:00:00.000Z,T15:30:00.000Z,4,7',
    'T15:30:00.000Z,T17:00:00.000Z,4,7',
  ];
  console.log("index", index);
  const data =SLOT_CATEGORIES[index.data];
  console.log (SLOT_CATEGORIES);


  const dataArray = data?.split(",");
  
  const SLOT_COMPONENTS = [
    {
      "start": moment().weekday(dataArray[2]).format('YYYY-MM-DD').concat(dataArray[0]),
      "end": moment().weekday(dataArray[2]).format('YYYY-MM-DD').concat(dataArray[1]),
      "title": "link Meet",
      "color": "red"
    },
    {
      "start": moment().weekday(dataArray[3]).format('YYYY-MM-DD').concat(dataArray[0]),
      "end": moment().weekday(dataArray[3]).format('YYYY-MM-DD').concat(dataArray[1]),
      "title": "link Meet",
      "color": "red"
  
    }
  ]

  

  const [myEvents, setEvents] = React.useState([]);
  

  // React.useEffect(() => {
  //     getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
  //         console.log(events);
  //         setEvents(events);
  //     }, 'jsonp');
  // }, []);

  // setEvents(CALENDAR_CUSTOMER_);
  // React.useEffect(() => {
  //   setEvents(CALENDAR_CUSTOMER_);
  // });

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title
    });
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
        <Eventcalendar
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