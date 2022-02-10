import { Box, Card, Typography } from '@mui/material';

function MyKanbanCard() {
  return (
    <Card
      sx={{
        width: 260,
        height: 82,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center',
        p: 2,
      }}
      elevation={0}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="labelSmall" color="onSurface.variant">
          #ID
        </Typography>
        <Typography variant="bodySmall" color="onSurface.variant">
          xxd xxh
        </Typography>
      </Box>
      <Typography variant="titleMedium" display="block" color="onSurface.main">
        Name
      </Typography>
      <Typography variant="bodySmall" display="block" color="onSurface.variant">
        City, Country
      </Typography>
    </Card>
  );
}

export default MyKanbanCard;
