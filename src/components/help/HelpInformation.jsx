import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class HelpInformation extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    };

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    How to Sign up
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                       1: Register a new account by click on th Sign Up button and filling out the form.
                       2: Sign in with your email and password.
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    How to rate a review.
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                       Click on the a value from 1-5 on the item you want to review.
                       The value you click with be your rating for that item.
                       You rating is show on your comment for that review.
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Can use swear words.
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Please refrain from using swear words.
                      Let's keep this community pg13.
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}