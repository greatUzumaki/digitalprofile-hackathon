import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    flexGrow: 1,
    marginRight: 10,
  },
}));

const originalRows = [
  {
    header: 'История болезней',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa ratione voluptate eveniet nihil sequi animi voluptatum asperiores eum aspernatur! Itaque natus cumque earum at veritatis nemo adipisci laborum recusandae?',
  },
  {
    header: 'Результаты анализов',
    text: 'Ленина',
  },
  {
    header: 'Аллергии',
    text: 'Ленина',
  },
  {
    header: 'Хронические заболевания',
    text: 'Ленина',
  },
  {
    header: 'Курс лечения',
    text: 'Ленина',
  },
  {
    header: 'Жалобы пациента',
    text: 'Ленина',
  },
];

export default function SimpleAccordion() {
  const classes = useStyles();
  const [info, setinfo] = useState(originalRows);

  return (
    <div className={classes.root}>
      {info.map((inf) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>{inf.header}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordion}>
            <div className={classes.text}>
              <Typography>{inf.text}</Typography>
            </div>
            <div>
              <Button
                variant='outlined'
                style={{ color: 'green', fontSize: 13 }}
              >
                Редактировать
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
