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

import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import { Card, Container,Box } from '@mui/material';


function Calendar() {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            schedule: { type: 'week' }
        };
    }, []);

    return (
        <Container>
            <Box height="500px" >
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

export default Calendar;