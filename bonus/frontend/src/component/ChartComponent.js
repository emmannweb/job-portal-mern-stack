
import { Card, CardContent, useTheme } from '@mui/material'


const ChartComponent = ({ children }) => {
    const { palette } = useTheme();
    return (
        <>
            <Card sx={{ bgcolor: palette.secondary.midNightBlue, width: "100%" }}>
                <CardContent>
                    {children}
                </CardContent>

            </Card>
        </>
    )
}

export default ChartComponent