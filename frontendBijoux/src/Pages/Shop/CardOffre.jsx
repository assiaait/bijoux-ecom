import React, { Component } from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ForumIcon from '@mui/icons-material/Forum';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

class CardOffre extends Component {
    render(){
        return(
            <React.Fragment>
                <div className='cardOffre d-flex column justify-content-around align-items-center'>
                    <div className='d-flex column'>
                        <StorageIcon />
                        <h6 className='ps-3'>Free Delevery</h6>
                    </div>
                    <div className='d-flex column'>
                        <WorkspacePremiumIcon />
                        <h6 className='ps-3'>Money Back Guarantee </h6>
                    </div>
                    <div className='d-flex column'>
                        <ForumIcon />
                        <h6 className='ps-3'>24/7 Support</h6>
                    </div>
                    <div className='d-flex column'>
                        <CardGiftcardIcon />
                        <h6 className='ps-3'>High Quality</h6>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CardOffre