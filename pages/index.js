import {
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  Typography,
  Drawer,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import styles from '../styles/Home.module.css';

const drawerWidth = 80;

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Home', 'Jobs', 'Applicants', 'Directory'].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{ display: 'flex', flexDirection: 'column', fontSize: 11 }}
            >
              <InboxIcon />
              <ListItemText
                primary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body3"
                    color="text.primary"
                  >
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Typography variant="h4">This is a placeholder title</Typography>
    </Box>
  );
}
