import {
  Drawer,
  List,
  Box,
  Typography,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import Image from 'next/image';

function MyDrawer() {
  return (
    <Drawer
      sx={{
        width: 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 80,
          boxSizing: 'border-box',
          backgroundColor: 'temp.drawerBackground',
          py: 1,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Image
            src="/logo/white.svg"
            alt="logo_white"
            height="36"
            width="36"
          />
        </Box>
        {['Home', 'Jobs', 'Applicants', 'Directory'].map((text, index) => (
          <ListItemButton
            button
            key={text}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 11,
              py: 1,
              color: '#FFFFFF',
            }}
          >
            <InboxIcon />
            <ListItemText
              primary={
                <Typography
                  sx={{ display: 'inline' }}
                  variant="body3"
                  color="#FFFFFF"
                >
                  {text}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
      <List sx={{ margin: 'auto auto 0 auto' }}>
        <ListItemButton
          button
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 1,
            fontSize: 11,
            color: '#FFFFFF',
          }}
        >
          <InboxIcon />
          <Typography
            sx={{ display: 'inline' }}
            variant="body3"
            color="#FFFFFF"
          >
            Profile
          </Typography>
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default MyDrawer;
