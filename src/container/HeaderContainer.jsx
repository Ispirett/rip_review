import React from "react";
import {Button,Popup,Form,Input} from "semantic-ui-react";
import '../css/main.css'
import NavSearch from "../components/NavSearch";
export default () =>(
    <header id={'header'}>
        <nav id={'nav'}>
        <div id={'search'}>
           <NavSearch/>
        </div>
          <ul className={'nav-ul'}>
              <li>Home</li>
              <li >About</li>
            <li>
                {/*Authentication*/}
                <Popup
                pinned
                on='click'
                trigger={<Button color={'google plus'} content={'SignUp'}/>}
                content={'This is really kool here'}
                position='bottom right'
                >
                <Popup.Header>
                    Become a Member
                </Popup.Header>
                <Popup.Content>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='First name'
                                placeholder='First name'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Last name'
                                placeholder='Last name'
                            />
                        </Form.Group>
                        <Form.Field
                            id='form-input-control-error-email'
                            control={Input}
                            label='Email'
                            placeholder='joe@schmoe.com'
                            // error={{
                            //     content: 'Please enter a valid email address',
                            //     pointing: 'below',
                            // }}
                        />
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Confirm'
                            color={'teal'}
                            label='have a good day!'
                        />
                    </Form>
                </Popup.Content>

                </Popup>



            </li>
          </ul>
        </nav>

        <section className={'hero'}>
            <h1>Ultimate Review Platform</h1>
            <p>Perpetuating Change</p>
        </section>
    </header>
)