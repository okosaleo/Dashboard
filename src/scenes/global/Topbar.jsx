import {Box, IconButton, useTheme, InputBase } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutline, Search } from '@mui/icons-material'

export default function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
                <Search />
            </IconButton>
        </Box>
        <Box display="flex">
        <IconButton onClick={colorMode.togggleColorMode}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeOutlined /> ) : (
                    <LightModeOutlined />
            )}
        </IconButton>
            <IconButton>
                <NotificationsOutlined />
            </IconButton>
            <IconButton>
                <SettingsOutlined />
            </IconButton> 
            <IconButton>
                <PersonOutline />
            </IconButton>
        </Box>
    </Box>
  )
}

