import React from 'react';
import './Page2.css';
import Page2_Block from './Page2-Block/Page2-Block';
import Page2_Block_Scroll from './Page2-Block/Page2-Block-scroll';

const Page2_table = (props) => {
    return (
        <scroll-container>
            {props.values.map((el, id) => (
                <Page2_Block_Scroll text={el.text} id={el.id} check={el.checked} key={id} />
            ))}
        </scroll-container>
    );
}

const createvalues = (num) => {
    const values = [];
    for (let i = 1; i < num + 1; i++)
    {
        values.push({id:i, text:'text', checked:false});
    }
    return values;
}

const Page2 = () => {
    const [checked, setChecked] = React.useState(false);
    let value = createvalues(20000);
    const [values, setValues] = React.useState(value);
    return (
        <div className='app-page2'>
            <div class="center-page2">
                <div>
                    <table border="1">
                        <tr>
                            <th className='page2-check'><input id="maincheck" type="checkbox" checked={checked}
                                onChange={() => {
                                    setChecked(!checked);
                                    setValues(values.map((el) => ({id: el.id, text: el.text, checked: !checked})));
                                }} />
                                
                            </th>
                            
                            <th className='page2-id'>id</th>
                            <th className='page2-text'>text</th>
                        </tr>
                    </table>
                    <Page2_table values={values} />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Page2;