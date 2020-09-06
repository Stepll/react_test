import React from 'react';
import './Page2.css';
import Page2_Block from './Page2-Block/Page2-Block';
import Page2_Block_Scroll from './Page2-Block/Page2-Block-scroll';

const Page2_table = (props) => {
    const inputs = [];
    for (let i = 0; i < props.Number; i++) {
        let tmp = i + 1;
        inputs.push(<Page2_Block_Scroll text="text" id={tmp} check={props.checkS} />);
    }
    return inputs;
}

const Page2 = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <div className='app-page2'>
            <div class="center-page2">
                <div>
                    <table border="1">
                        <tr>
                            <th className='page2-check'><input id="maincheck" type="checkbox" checked={!checked}
                            onChange={() => {
                                setChecked(!checked); 
                                for (let i = 0; i < 50; i++){
                                    let tmp = i + 1;
                                    document.getElementById('check'+ tmp).checked = true;
                                }
                                }}/></th>
                            <th className='page2-id'>id</th>
                            <th className='page2-text'>text</th>
                        </tr>
                    </table>
                    <scroll-container>
                        <Page2_table Number={50} />
                    </scroll-container>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Page2;