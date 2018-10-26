import React from 'react';

import './ConfirmationPopup.css';
import Block, {BlockRow, Row} from "../Settings/Block";
import Title from "../Titile/Titile";
import Button from "../Button/Button";

const ConfirmationPopup = ({from, to, approveCallback, rejectCallback, children, content}) => (
    <div className='confirmation-popup'>
        <span>
            <Title inline={true} style={{color: 'black'}}>Transaction confirmation</Title>
            <Block>
                <BlockRow>
                    <div className='confirmation-popup__popup'>
                        <Row>
                            <div className='popup-label'>Sender address:</div>
                            <span className='address'>{from}</span>
                        </Row>
                        <Row>
                            <div className='popup-label'>Recipient address:</div>
                            <span className='address'>{to}</span>
                        </Row>
                        {content}
                    </div>
                    <div className='confirmation-popup__buttons'>
                        <Button style={{width: 150}} color='green' onClick={approveCallback}>CONFIRM</Button>
                        <Button style={{width: 150}} color='red' onClick={rejectCallback}>REJECT</Button>
                    </div>
                </BlockRow>
            </Block>
        </span>
    </div>
);

export const TxDetailsContainer = ({children}) => (
    <div className='tx-details-container'>
        {children}
    </div>
);

export default ConfirmationPopup;