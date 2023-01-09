import { Box, Container, Tab, Tabs, tabsClasses } from '@mui/material';
import React from 'react'
import { locationsTab } from './MockData';

const OptionsTab = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newEvent) => {
        setValue(newEvent);
    }
    return (
        <Container maxWidth="xl">
            <Box
            sx={{
                display: 'flex',
                flexGrow: 1,
                px: { xs: 0, md: 2 },
                alignItems: "center",
                mt: 2,
                mb: 2,
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`] : {
                            '&.Mui-disabled' : { opacity: 0.3 }
                        }
                    }}
                    >
                        {
                            locationsTab.map((tab) => {
                                return <Tab key={tab.id} icon={tab.com} />
                            })
                        }
                    </Tabs>
            </Box>
        </Container>
    )
}

export default OptionsTab