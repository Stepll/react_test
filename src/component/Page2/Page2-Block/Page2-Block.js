import React from 'react';
import './Page2-Block.css';

const Page2_Block = ({id, text, check}) => {
    const [checked, setChecked] = React.useState(true);
    return (
        <div>
            <table>
                <tr>
                    <th className='page2-check'><input id={'check' + id}  type="checkbox" checked={!checked || check}
                        onChange={() => setChecked(!checked)}/></th>
                    <th className='page2-id'>{id}</th>
                    <th className='page2-text'>{text}</th>
                </tr>
            </table>
        </div>
    );
}

export default Page2_Block;