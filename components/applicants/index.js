import MyDrawer from '../ui/Drawer';
import MyKanbanCard from './KanbanCard';

import { Box } from '@mui/material';

function Applicants() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'gray' }}>
      <MyDrawer />
      <MyKanbanCard />
    </Box>
  );
}

export default Applicants;
