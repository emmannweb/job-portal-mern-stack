import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import Navbar from '../component/Navbar'
import { jobLoadSingleAction } from '../redux/actions/jobAction'
import Button from '@mui/material/Button'
import { userApplyJobAction } from '../redux/actions/userAction'
import { useTheme } from '@emotion/react'


const SingleJob = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { singleJob, loading } = useSelector(state => state.singleJob)
    const { id } = useParams();
    useEffect(() => {
        dispatch(jobLoadSingleAction(id));
    }, [id]);

    const applyForAJob = () => {
        dispatch(userApplyJobAction({
            title: singleJob && singleJob.title,
            description: singleJob && singleJob.description,
            salary: singleJob && singleJob.salary,
            location: singleJob && singleJob.location
        }))
    }

    return (
        <>

            <Box sx={{ bgcolor: "#fafafa" }}>

                <Navbar />
                <Box sx={{ height: 'calc(100vh - 140px)' }}>
                    <Container sx={{ pt: '30px' }}>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Box sx={{ flex: 4, p: 2 }}>

                                {
                                    loading ? <LoadingBox /> :

                                        <Card sx={{ bgcolor: palette.primary.white }} >
                                            <CardContent>
                                                <Typography variant="h5" component="h3">
                                                    {singleJob && singleJob.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Salary</Box>: ${singleJob && singleJob.salary}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Category</Box>: {singleJob && singleJob.jobType ? singleJob.jobType.jobTypeName : "No category"}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Location</Box>: {singleJob && singleJob.location}
                                                </Typography>
                                                <Typography variant="body2" sx={{ pt: 2 }}>
                                                    {/* <h3>Job description:</h3> */}
                                                    {singleJob && singleJob.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                }
                            </Box>
                            <Box sx={{ flex: 1, p: 2 }}>
                                <Card sx={{ p: 2, bgcolor: palette.primary.white }}>
                                    <Button onClick={applyForAJob} sx={{ fontSize: "13px" }} variant='contained'>Applied for this Job</Button>
                                </Card>
                            </Box>

                        </Stack>

                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default SingleJob