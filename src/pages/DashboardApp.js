import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Collapse, Card, Stack } from '@mui/material';
// components

import userApi from '../utils/userApi';
import PtApi from '../utils/PtApi';

import scheduleApi from '../utils/scheduleApi';
import Page from '../components/Page';
import Iconify from '../components/Iconify';

import { useNavigate } from 'react-router-dom/dist';
// sections
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
    PTCard,
    News,
} from '../sections/@dashboard/app';
import Calendar from './Calendar';

// ----------------------------------------------------------------------

const POST_TITLES = [
    '1 Đặng Nhật Kha',
    '2 Đặng Nhật Kha',
    '3 Đặng Nhật Kha thứ tư',
    'Đặng Nhật Kha',
    // 'Đặng Nhật Kha',
];

const posts = [...Array(1)].map((_, index) => ({
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/covers/cover_${index + 1}.jpg`,
    title: POST_TITLES[index],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
        name: faker.name.findName(),
        avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
    },
}));
const lessons = [
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
    'Tập cơ bụng đứng',
    'Tập bụng đứng không cần nằm',
    'Cardio mông to đùi thon',
    'Săn chắc cơ ngực tại nhà',
    '5 bài tập bụng eo thon 6 múi',
];

export default function DashboardApp() {
    const navigate = useNavigate();

    const userInfo = useSelector((state) => state?.auth?.userInfo);

    console.log('userInfo', userInfo);
    // prototype
    const [user, setUser] = useState();
    const [pt, setPt] = useState();
    const [userCalendar, setUserCalendar] = useState();

    const theme = useTheme();
    // Call API to get user information
    useEffect(() => {
        if (userInfo.roleId == 1) {
            const initData = async () => {
                const tmp = await userApi.getUserId(userInfo.userId);
                console.log(tmp.data);
                setUser(tmp.data);

                // Call API to get calendar
                const calendar = await scheduleApi.getUserSchedule(userInfo.userId);
                console.log(calendar.data);
                setUserCalendar(calendar.data);

                const PT = await PtApi.getPtByUserId(userInfo.userId);
                setPt(PT.data.data);
            };
            initData();
        } else if (userInfo.roleId == 2) {
            const initData = async () => {
                const tmp = await PtApi.getPtById(userInfo.ptId);
                console.log(tmp.data);
                setUser(tmp.data);

                // Call API to get calendar
                const calendar = await scheduleApi.getPtSchedule(userInfo.ptId);
                console.log(calendar.data);
                setUserCalendar(calendar.data);

                setPt(tmp.data);
            };
            initData();
        } else {
            //navigate to admin page
            navigate('/admin', { replace: true });
        }
    }, []);

    return (
        <Page title="Dashboard">
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back
                </Typography>

                <Grid container justifyContent={'space-between'} spacing={3}>
                    {posts.map((post, index) => {
                        post.title = userInfo.fullName;
                        return <PTCard key={post.id} post={post} index={index} />;
                    })}

                    {posts.map((post, index) => {
                        post.title = userInfo.fullName;
                        return <News key={post.id} post={post} index={index} />;
                    })}

                    {userCalendar && pt && <Calendar index={userCalendar} linkMeet={pt.linkMeet} />}

                    <Grid item xs={12} md={12} lg={12}>
                        <AppOrderTimeline
                            title="Agenda"
                            list={[...Array(10)].map((_, index) => ({
                                id: faker.datatype.uuid(),
                                title: [
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                    'Tập cơ bụng đứng',
                                    'Tập bụng đứng không cần nằm',
                                    'Cardio mông to đùi thon',
                                    'Săn chắc cơ ngực tại nhà',
                                    '5 bài tập bụng eo thon 6 múi',
                                ][index],
                                type: `order${index + 1}`,
                                time: faker.date.past(),
                            }))}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}
