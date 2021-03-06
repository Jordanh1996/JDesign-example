import React from 'react';

import { 
    //Buttons
    Button,
    TrashButton,
    AddButton,
    EditButton,
    IconButton,
    PushedButton,
    GoogleButton,
    GooglePushedButton,
    PushedIconButton,
    // Text Input
    TextInput,
    FloatingTextInput,
    // Text Area
    TextArea,
    FloatingTextArea,
    // Radio
    Radio,
    // Checkbox
    Checkbox,
    // Switch
    Switch,
    // Select
    Select,
    FloatingSelect,
    Option,
    // Modal
    Modal
} from 'jdesign';

class App extends React.Component {

    state = {
        modalOpen: false
    };


    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <h1>My UI</h1>
                <h2>Button</h2>
                <p>Here's an example of button.</p>
                <Button 
                    label='Squared Button'
                />
                <br />
                <Button
                    label='Rounded Button'
                    rounded
                />
                <br />
                <PushedButton 
                    label='Pushed Button'
                    rounded
                />
                <br />
                <TrashButton />
                <br />
                <AddButton />
                <br />
                <EditButton />
                <br />
                <IconButton
                    rounded
                    style={{ background: 'radial-gradient(#FFEE58, #FFF176)', boxShadow: '0 0 2px 0 #303030', color: '#303030' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.99961 21.50922" style={{ width: '1.4rem', height: '1.4rem', fill: '#808080' }}>
                        <path d="M10.57 9.1H6.2L10.3.6a.43.43 0 0 0-.72-.47L.1 11.3a.43.43 0 0 0 .33.72H4.4L.05 20.9a.43.43 0 0 0 .72.46L10.9 9.8a.43.43 0 0 0-.33-.7zm-8.3 9.24L5.5 11.8a.43.43 0 0 0-.4-.64H1.36L8.04 3.3 5.1 9.3a.43.43 0 0 0 .4.63h4.1z"/>
                    </svg>
                </IconButton>
                <br />
                <IconButton
                    label='Pay with Paypal'
                    style= {{ background: '#EEEEEE', color: '#202020', margin: '12px' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1009.80051 270.30076" style={{ width: '4rem', fill: 'black', alignSelf: 'center', marginRight: '8px' }}>
                        <path d="M974.64 23.4V3.3h-7.46V.62h17.97V3.3h-7.5v20.1h-3zm13.5 0V.64h4.47l5.4 16.12c.5 1.5.86 2.63 1.07 3.36l1.24-3.63 5.5-15.84h4V23.4h-2.8V4.36l-6.64 19.05h-2.73L991 4.14V23.4h-2.87zM647.2 88.16c-8.85 6.45-21.14 9.7-37 9.7h-7.28c-6.32 0-10.3-5.06-8.9-11.2l8.82-38.16a15.12 15.12 0 0 1 14-11.17h9.6q16.86 0 25.43 5.72c5.7 3.77 8.54 9.6 8.54 17.44q0 18-13.22 27.65M710.5 29.4a44.3 44.3 0 0 0-16.15-17.28 72.58 72.58 0 0 0-25.46-9.37A193.27 193.27 0 0 0 634.34 0h-61.2a15 15 0 0 0-14 11.2l-41.43 179.75c-1.43 6.16 2.57 11.18 8.85 11.18H556a15.14 15.14 0 0 0 14-11.18l10.05-43.57a15.15 15.15 0 0 1 14-11.2h8.42q53.75 0 83.7-22.07t29.93-58.16c0-10.6-1.85-19.43-5.57-26.53m89.57 133.02a73.17 73.17 0 0 1-15.3 8.5 40.35 40.35 0 0 1-15.3 3.36q-10.95 0-16.68-3.2c-3.82-2.14-5.73-5.76-5.73-11 0-5.94 1.4-10.73 4.32-14.36s7.06-6.4 12.47-8.38a96.9 96.9 0 0 1 19.3-4.35q11.32-1.47 24.3-2.58zm-9.18 39.72h36.86a15.1 15.1 0 0 0 14-11.18l21.4-92.55a55.26 55.26 0 0 0 1.26-7.62c.3-2.9.5-5.24.5-7q0-19.73-16.7-29.05c-11.16-6.26-28.55-9.36-52.33-9.36A234.13 234.13 0 0 0 760.4 48c-11.9 1.9-20.67 3.53-26.38 5l-5 25.2c-1.2 6.2-.2 11.28 2.27 11.28 4.8-1.8 12.05-4 21.7-6.77a98.67 98.67 0 0 1 26.5-4.07q17.7 0 26.56 3.8C812 85.03 815 89.4 815 95.68a21.58 21.58 0 0 1-.44 4.18c-.3 1.22-.54 2.13-.65 2.67q-25.16 1.48-46.9 4.63t-37.22 10.18c-11.1 5-19.52 11.67-25.18 20.06s-8.5 18.58-8.5 30.63c0 11.4 4 20.7 12 27.8s18.28 10.65 30.88 10.65c7.83 0 14-.56 18.4-1.65a102 102 0 0 0 14.17-4.82 83.1 83.1 0 0 0 12.07-6.76c4.3-2.82 8-5.3 11.08-7.32l-3.77 16.25M958.67 1.64L916.82 191a15.18 15.18 0 0 1-14 11.2h-26.2c-6.3 0-10.3-5-8.87-11.2L907 12.8a15.13 15.13 0 0 1 14-11.16h37.64m-828.9 86.83c-8.83 6.46-21.1 9.72-37 9.72H85.5c-6.3 0-10.3-5.08-8.9-11.2l8.82-38.2a15.15 15.15 0 0 1 14-11.17h9.6c11.2 0 19.7 1.9 25.4 5.73S143 53 143 60.86c0 11.94-4.45 21.16-13.27 27.6m63.34-58.74a44.37 44.37 0 0 0-16.15-17.26 73.2 73.2 0 0 0-25.47-9.4 193.2 193.2 0 0 0-34.53-2.7h-61.2a15.1 15.1 0 0 0-14 11.16L.28 191.28c-1.44 6.17 2.55 11.2 8.86 11.2h29.4a15.12 15.12 0 0 0 14-11.18l10.06-43.58a15.14 15.14 0 0 1 14-11.17H85q53.73 0 83.66-22.1t29.94-58.2c0-10.6-1.85-19.4-5.58-26.53m89.65 133.03a74.58 74.58 0 0 1-15.33 8.5A40.34 40.34 0 0 1 252 174.6c-7.25 0-12.83-1.07-16.66-3.2s-5.7-5.78-5.7-11c0-5.92 1.4-10.75 4.28-14.35s7.08-6.4 12.53-8.4a96 96 0 0 1 19.28-4.32q11.35-1.48 24.3-2.57zm-9.18 39.74h36.84a15.17 15.17 0 0 0 14-11.2l21.35-92.57a46.88 46.88 0 0 0 1.3-7.64 66 66 0 0 0 .5-7q0-19.7-16.7-29.07t-52.37-9.36a233.22 233.22 0 0 0-35.5 2.73Q225 51.15 216.6 53.3l-5 25.24c-1.2 6.18-.2 11.27 2.28 11.27 4.84-1.8 12.06-4.04 21.72-6.8a98.2 98.2 0 0 1 26.48-4.1c11.8 0 20.6 1.3 26.58 3.8s8.9 7 8.9 13.3a22.65 22.65 0 0 1-.43 4.13c-.34 1.28-.56 2.16-.66 2.72q-25.2 1.47-46.85 4.6c-14.4 2.08-26.8 5.5-37.25 10.18q-16.67 7.55-25.2 20.07t-8.53 30.62q0 17.15 12 27.8t30.87 10.7c7.85 0 14-.6 18.4-1.7a98 98 0 0 0 14.17-4.84 81.28 81.28 0 0 0 12.08-6.76c4.3-2.85 8-5.28 11-7.34l-3.73 16.27M496.7 45.44c-6.28 0-14.6 5-18.38 11.2l-51.85 89.06-14.23-88.93a15.14 15.14 0 0 0-14-11.2H372c-6.3 0-10.32 5-8.87 11.2l22.68 146.88c.43 3.18.84 5.88 1.24 8.12L358.8 259.1c-3.8 6.16-1.77 11.2 4.55 11.2h30.36c6.33 0 14.57-5 18.37-11.2L538.54 45.45z"/>
                    </svg>
                </IconButton>
                <PushedIconButton 
                    rounded
                    style={{ margin: '12px' }}
                >              
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.27727 19.98" style={{ width: '1.4rem', height: '1.4rem', fill: 'white' }}>
                        <path d="M2.2 4.4A2.2 2.2 0 1 0 0 2.2a2.2 2.2 0 0 0 2.2 2.2zm0-3.53A1.33 1.33 0 1 1 .9 2.2 1.34 1.34 0 0 1 2.2.87zm15.74.1a1.54 1.54 0 0 0-2.17-.24L10.84 4.7l1.5-1.83a1.54 1.54 0 0 0 .33-1.13A1.52 1.52 0 0 0 12.1.7 1.54 1.54 0 0 0 11 .36a1.52 1.52 0 0 0-1.04.56L8.6 2.62l-2.24-.1a1.53 1.53 0 0 0-1.04.33l-1.97 1.6-.15.16L.4 7.65a1.54 1.54 0 0 0-.2 1.8 1.57 1.57 0 0 0 1.64.76l3.22-.65 1.9.75v8.14a1.54 1.54 0 1 0 3.07 0V9.3l7.67-6.18a1.54 1.54 0 0 0 .24-2.17zm-8.6 7.8a.44.44 0 0 0-.17.35v9.3a.67.67 0 1 1-1.34 0V10a.43.43 0 0 0-.27-.4l-1-.4a1.54 1.54 0 0 0-1-2.9l-2 .4a.43.43 0 0 0-.32.52.44.44 0 0 0 .2.27.45.45 0 0 0 .3.04l1.97-.4a.68.68 0 0 1 .8.52.67.67 0 0 1-.5.8l-4.3.85a.68.68 0 0 1-.65-1.1L3.8 5.17l.08-.07 1.97-1.6a.68.68 0 0 1 .45-.13l2.45.1a.44.44 0 0 0 .37-.16l1.5-1.83a.66.66 0 0 1 .45-.25.65.65 0 0 1 .5.16.66.66 0 0 1 .25.45.65.65 0 0 1-.15.5L9.82 4.6a.68.68 0 0 1-.55.24L8.2 4.8a.36.36 0 0 0-.26.07.44.44 0 0 0-.3.2.47.47 0 0 0-.05.32.4.4 0 0 0 .17.25l1.56 1a.44.44 0 0 0 .5-.02l6.5-5.22a.7.7 0 0 1 .5-.14.66.66 0 0 1 .44.25.68.68 0 0 1-.1.96zm.12-3.06h.2l-.12.1z"/>
                    </svg>
                </PushedIconButton>
                <GooglePushedButton style={{ margin: '12px' }} />
                <GoogleButton style={{ margin: '12px' }} />
                <h2>Text Inputs</h2>
                <TextInput style={{ margin: '12px' }} placeholder="Text Input" />
                <FloatingTextInput style={{ margin: '12px' }} placeholder="Username" />
                <h2>Text Areas</h2>
                <TextArea rows={4} placeholder='Text Area' />
                <FloatingTextArea rows={4} placeholder='Floating Text Area' />
                <h2>Select Inputs</h2>
                <Select defaultValue='3'>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option value='3'>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                </Select>
                <p>When a select has to many options it creates a scroll for you</p>
                <Select>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                    <Option selected>6</Option>
                    <Option>7</Option>
                    <Option>8</Option>
                    <Option>9</Option>
                    <Option>10</Option>
                    <Option>11</Option>
                    <Option>12</Option>
                </Select>
                <p>disabled</p>
                <Select disabled>
                    <Option selected>1</Option>
                </Select>
                <p>you can search the select options using the arrow keys</p>
                <p>you can also type on you keyboard to search</p>
                <Select>
                    <Option>USA</Option>
                    <Option>Canada</Option>
                    <Option>Germany</Option>
                    <Option>France</Option>
                    <Option selected>United Kingdom</Option>
                    <Option>Iraq</Option>
                    <Option>Iran</Option>
                    <Option>Korea</Option>
                    <Option>Spain</Option>
                    <Option>Denmark</Option>
                    <Option>Switzerland</Option>
                    <Option>Brazil</Option>
                </Select>
                <p>Floating Select</p>
                <FloatingSelect floatingLabel='Number'>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                    <Option>6</Option>
                    <Option>7</Option>
                    <Option>8</Option>
                    <Option>9</Option>
                    <Option>10</Option>
                    <Option>11</Option>
                    <Option>12</Option>
                </FloatingSelect>
                <h2>Radio buttons</h2>
                <Radio name="asd" />
                <p>with custom color</p>
                <Radio name="asd" color='red' />
                <p>disabled</p>
                <Radio name="asd" disabled />
                <h2>Check boxes</h2>
                <Checkbox />
                <p>with ripple</p>
                <Checkbox ripple />
                <p>different color</p>
                <Checkbox ripple color='red' vColor='black' />
                <p>disabled</p>
                <Checkbox disabled />
                <h2>Switches</h2>
                <Switch />
                <p>different color</p>
                <Switch circleColor='red' railColor='pink' />
                <p>disabled</p>
                <Switch disabled />
                <h2>Modal</h2>
                <Button
                    rounded
                    label='Open Modal'
                    onClick={() => this.setState({ modalOpen: true })}
                />
                <Modal open={this.state.modalOpen} style={{ padding: '20px' }} closeOnClickOutside={() => this.setState({ modalOpen: false })}>
                    <h1>Jdesign</h1>
                    <p>how much do you like jdesign ?</p>
                    <label>I like it</label>
                    <Radio
                        name='like'
                    />
                    <label>I love it</label>
                    <Radio
                        name='like'
                    />
                    <label>Best UI framework</label>
                    <Radio
                        name='like'
                    />
                    <label>SO MUCHHHH</label>
                    <Radio
                        name='like'
                        defaultChecked
                    />
                    <div style={{ marginTop: 'auto', marginLeft: 'auto', display: 'flex', flexDirection: 'row', paddingTop: '12px' }}>
                        <Button 
                            rounded
                            label='Submit'
                            onClick={() => this.setState({ modalOpen: false })}
                            containerStyle={{
                                marginRight: '6px'
                            }}
                        />
                        <Button 
                            rounded
                            label='Close Modal'
                            onClick={() => this.setState({ modalOpen: false })}
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}


export default App;
