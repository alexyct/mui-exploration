import {
  Avatar,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Box,
  CssBaseline,
  Typography,
  Drawer,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import Image from 'next/image';

const drawerWidth = 80;

export default function Home() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
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
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={9}>
              <Paper
                elevation={0}
                sx={{ backgroundColor: 'temp.kanbanBackground', padding: 2 }}
              >
                <Box mb={1}>
                  <Typography variant="headlineMedium">
                    What&apos;s happening at BfE
                  </Typography>
                </Box>
                <Grid container spacing={8}>
                  <Grid item xs={8}>
                    <Box mb={2}>
                      <Typography variant="titleLarge">
                        BfE Briefs Vol. 07, November 2021
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="bodyMedium">
                        📋 [TLDR] 5 Main Updates Missed something within BfE
                        this month? Here&apos;s what you need to know: ICYMI:
                        Our next Startup Review Committee event will take place
                        on December 18! Tune in to hear startup pitches from the
                        top companies in this cohort before we select the next
                        batch of ~10 startups entering our Spring 2022 Cohort
                        ICYMI: BfE is now a registered UK Charitable
                        Incorporated Organisation (CIO)! In the works since
                        March, this new legal status helps bring more
                        credibility to our global mission to accelerate social
                        enterprises building a more sustainable world Check out
                        the YouTube recording for the BfE Tech Autumn Project
                        Showcase on YouTube to learn about the wide variety of
                        projects and milestones we have achieved as a division
                        over the past half a year! 🍾 The Global Communications
                        team is recruiting a Global Content Manager to join us
                        and help... Read more
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="titleLarge">BfE on Social</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4} sm={8} md={3}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12} md={12}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: 'temp.kanbanBackground',
                      padding: 2,
                    }}
                  >
                    <Box mb={1}>
                      <Typography variant="titleLarge">For you</Typography>
                    </Box>
                    <Typography variant="labelMedium">Project Links</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={12} md={12}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: 'temp.kanbanBackground',
                      padding: 2,
                    }}
                  >
                    <Box mb={1}>
                      <Typography variant="titleLarge">Applicants</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={8} md={9}>
              <Paper
                elevation={0}
                sx={{ backgroundColor: 'temp.kanbanBackground', padding: 2 }}
              >
                <Box
                  mb={1}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="titleLarge">
                    Our Newest Member
                  </Typography>

                  <Typography variant="labelSmall" color="primary.main">
                    View all
                  </Typography>
                </Box>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          variant="rounded"
                          sx={{ width: 40, height: 40, marginRight: 1 }}
                        >
                          N
                        </Avatar>
                        <Box>
                          <Box>
                            <Typography variant="bodyMedium">
                              Member Name
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              variant="bodySmall"
                              sx={{ lineHeight: 0.5 }}
                            >
                              Member Role
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
