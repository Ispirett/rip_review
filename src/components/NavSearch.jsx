import _ from 'lodash'
import faker from 'faker'
import React, {Component, useContext, useReducer, useState} from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import {AppContext} from "../container/AppContainer";
import ReviewDetail from "./item/ReviewDetail";

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}));

// const initialState = { isLoading: false, results: [], value: '' }

export default () => {
    const [state, dispatch] = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [newValue, newSetValue] = useState('');
    // state = initialState

   const handleResultSelect = (e, { result }) =>{
       newSetValue(result.title);
        //alert(result.title);

   };

   const  handleSearchChange = (e, { value }) => {
        //this.setState({ isLoading: true, value })
        setIsLoading(true);
        newSetValue(value);

        setTimeout(() => {
            // if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(newValue), 'i')
            const isMatch = (result) => re.test(result.title)

            // this.setState({
            //     isLoading: false,
            //     results: _.filter(source, isMatch),
            // })
            setIsLoading(false);
            setResults(_.filter(state.items, isMatch));
            dispatch({items: _.filter(results, isMatch)})
        }, 300)
    };


        return (
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        input={{ icon: 'search', iconPosition: 'left' }}
                        loading={isLoading}
                        onResultSelect={handleResultSelect}
                        onSearchChange={_.debounce(handleSearchChange, 500, {
                            leading: true,
                        })}
                        results={results}
                        value={newValue}

                    />
                </Grid.Column>
            {/*    <Grid.Column width={10}>*/}
            {/*        <Segment>*/}
            {/*            <Header>State</Header>*/}
            {/*            <pre style={{ overflowX: 'auto' }}>*/}
            {/*  {JSON.stringify(this.state, null, 2)}*/}
            {/*</pre>*/}
            {/*            <Header>Options</Header>*/}
            {/*            <pre style={{ overflowX: 'auto' }}>*/}
            {/*  {JSON.stringify(source, null, 2)}*/}
            {/*</pre>*/}
            {/*        </Segment>*/}
            {/*    </Grid.Column>*/}
            </Grid>
        )
}