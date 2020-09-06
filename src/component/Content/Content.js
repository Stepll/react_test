import React from 'react';
import './Content.css';
import ButtonNumber from './Window/ButtonNumber';

const ButtonsWindow = (probs) => {
    const inputs = [];
    for (let i = 0; i < probs.Number; i++) {
        inputs.push(<ButtonNumber Number={i + 1} />);
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
                    <button class='buttoncancel' onClick={ClickCancel} > cancel </button>
                    <button class='buttonok' onClick={ClickOk} > ok </button>
                </div>
            </div>
        </div>
    );
}

export default Content;