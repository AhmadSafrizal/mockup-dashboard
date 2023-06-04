import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      m='20px'
    >
      <Header
        title='FAQ'
        subtitle='Frequenty Asked Question Page'
      />

      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant='h5'
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi quo sed dolores odit enim?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant='h5'
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi quo sed dolores odit enim?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant='h5'
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi quo sed dolores odit enim?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant='h5'
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi quo sed dolores odit enim?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant='h5'
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi quo sed dolores odit enim?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant='h5'
          >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi quo sed dolores odit enim?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ