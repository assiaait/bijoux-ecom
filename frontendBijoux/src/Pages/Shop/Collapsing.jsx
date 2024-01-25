import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PhotoReview from '../../img/profil.jpg';
import { Rating } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem',color:'#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{width:'50vw',marginLeft:'30vw',marginTop:'15vh'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary style={{background:'#34513F',color:'#fff'}} aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'#34513F'}}>
            Donec nec arcu dictum gravida arcu sodales pharetra, nisi magna. Nisi dignissim ultricies nunc netus amet, cursus commodo eget. Sed viverra viverra aliquet volutpat auctor et. Urna, dui, varius mauris quis feugiat integer. Velit eros ullamcorper sit nisl enim in adipiscing cursus mi.
            Molestie semper nullam lacus nibh sed viverra rhoncus, sem. Id aliquet vestibulum bibendum.
            <ul>
              <li>18k gold with round brilliant diamonds</li>
              <li>Size medium</li>
              <li>Carat total weight 1.14</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary  style={{background:'#34513F',color:'#fff'}} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Additional Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="d-flex justify-content-between px-4">
              <div className="d-flex">
                <h6 className='pt-1' style={{color:'#A7A7A7'}}>BRAND:</h6>
                <p className='ps-3' style={{color:'#34513F'}}>Louis Vuitton</p>
              </div>
              <div className="d-flex">
                <h6 className='pt-1' style={{color:'#A7A7A7'}}>GEMSTONE SHAPE:</h6>
                <p className='ps-3' style={{color:'#34513F'}}>Marquise</p>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary  style={{background:'#34513F',color:'#fff'}} aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Reviews (1)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='p-2 d-flex'>
              <div>
                <img src={PhotoReview} style={{width:'70px',height:'70px',borderRadius:'35px'}} alt="" />
              </div>
              <div className='pt-3 ps-3'>
                <div className='d-flex '>
                  <Rating name="read-only" value={3} readOnly  />
                  <strong className='ps-3 pt-1' style={{lineHeight: '17px',letterSpacing: '0.025em'}}>Asma Lmnawar</strong>
                  <span className='ps-3 pt-1' style={{lineHeight: '17px',letterHpacing: '0.06em',textTransform: 'uppercase',color: '#a7a7a7',order: '2',}}>April 8, 2020</span>
                </div>
                <p className='pt-1' style={{color:'#868686'}}>I liked the bracelet very much. Elegant and gorgeous. Delivered very quickly. Thanks.</p>
              </div>
            </div>
            <div>
              <h5 style={{color:'#868686'}}>Add A Review</h5>
              <p style={{color:'#868686'}} className=' ps-2'>Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className='d-flex row'>
              <label style={{fontSize: '14px',lineHeight: '20px',letterSpacing: '0.025em',color:'#868686'}}>YOUR RATING *    <Rating name="size-small" defaultValue={2} size="small" /></label>
              
              <textarea name="comment" id="" cols="45" rows="8" placeholder="Your review *" className='mt-3 ms-3 p-3'style={{height: '30vh', width: '40vw',border:'1px solid #868686',fontSize: '16px',lineHeight:' 23px'}}></textarea>
              <div className='d-flex mt-3 ms-1 mb-4'>
                <input type="text" placeholder='Name *' name="name" id="" style={{fontSize: '16px',lineHeight: '23px',letterSpacing: '0.0125em',padding:'10px',width:'15vw'}} />
                <input className='ms-4' type="email" placeholder='Email *' name="emailReview" id="" style={{fontSize: '16px',lineHeight: '23px',letterSpacing: '0.0125em',padding:'10px',width:'20vw'}} />
              </div>
              <button className='ms-3' style={{width:'15vw',height:'7vh',border:'none',backgroundColor:'#34513F',color:'#fff'}}>Submit</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}