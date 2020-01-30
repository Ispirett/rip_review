import React, {useContext} from "react";
import {Button,Popup,Form,Input,Icon} from "semantic-ui-react";
import '../css/main.css'
import NavSearch from "../components/NavSearch";
import {AppContext} from "./AppContainer";


const Authentication = () =>{
    const [state, dispatch] = useContext(AppContext);
    if(state.authentication.login){
        return(
            <Button color={'google plus'}><Icon name='log out'/> Logout </Button>
        )
    }
    else{
        return (
            <div>
                <Popup
                    pinned
                    on='click'
                    trigger={<Button color={'google plus'} content={'SignIn'}> <Icon name='user'/> SignIn</Button>}
                    content={'This is really kool here'}
                    position='bottom right'
                >
                    <Popup.Header>
                        Become a Member
                    </Popup.Header>
                    <Popup.Content>
                        <Form>
                            <Form.Field
                                id='form-input-control-error-email'
                                control={Input}
                                label='Email'
                                placeholder='name@example.com'
                                // error={{
                                //     content: 'Please enter a valid email address',
                                //     pointing: 'below',
                                // }}
                            />
                            <Form.Field
                                id='form-input-control-password'
                                control={Input}
                                label='Password'
                                placeholder='Password'
                                type='password'
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
            {/*  Sing In*/}
                <Popup
                    pinned
                    on='click'
                    trigger={<Button color={'google plus'} content={'SignUp'}> <Icon name='user'/> SignUp</Button>}
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
                                    label='Name'
                                    placeholder='Name'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Username'
                                    placeholder='Username'
                                />
                            </Form.Group>

                            <Form.Group>
                            <Form.Field
                                id='form-input-control-error-email'
                                control={Input}
                                label='Email'
                                placeholder='name@example.com'
                                // error={{
                                //     content: 'Please enter a valid email address',
                                //     pointing: 'below',
                                // }}
                            />
                                <Form.Field
                                    id='form-input-control-password'
                                    control={Input}
                                    label='Password'
                                    placeholder='Password'
                                    type='password'
                                />
                            </Form.Group>
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

            </div>


        )
    }

};







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
                <Authentication/>



            </li>
          </ul>
        </nav>

        <section className={'hero'}>
            <h1>Ultimate Review Platform</h1>
            <p>Perpetuating Change</p>
        </section>
    </header>
)