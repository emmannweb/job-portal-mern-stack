import { Box } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>

                <h1>Page not found!</h1>
            </Box>
            <Footer />
        </>
    )
}

export default NotFound