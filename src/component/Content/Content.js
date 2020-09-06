import React from 'react';
import './Content.css';
import ButtonNumber from './Window/ButtonNumber';
import Block from './Window/Block';

const ButtonsWindow = (props) => {
    const inputs = [];
    for (let i = 0; i < props.Number; i++) {
        let tmp = i + 1;
        inputs.push(<ButtonNumber page={"#" + tmp + "scroll"} Number={tmp} />);
    }
    return inputs;
}

const BlocksWindow = (props) => {
    const inputs = [];
    for (let i = 0; i < props.Number; i++) {
        inputs.push(<Block Number={i + 1} />);
    }
    return inputs;
}

const Click = () => {
    document.getElementById('window').hidden = false;
}

const ClickCancel = () => {
    document.getElementById('window').hidden = true;
}

const ClickOk = () => {
    document.getElementById('window').hidden = true;
}

const Content = () => {
    return (
        <div className='app-content'>
            <div class="center">
                <button onClick={Click}>open window</button>
            </div>
            <div hidden class='windowdiv' id='window'>
                <div class='inwindow' >
                    <ButtonsWindow Number={50} />
                    <br/>
                    <scroll-container>
                        <BlocksWindow  Number={50} />
                    </scroll-container>
                    <button class='buttoncancel' onClick={ClickCancel} > cancel </button>
                    <button class='buttonok' onClick={ClickOk} > ok </button>
                </div>
            </div>
        </div>
    );
}

export default Content;