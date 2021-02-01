import React from 'react'
import Accordion from './components/Accordion'

const items = [
    {
        title: 'Q1/ What is React',
        content: 'A1/ React is a front'
    },
    {
        title: 'Q2/ Whay use React',
        content: 'A2/ React is a favourite JS framework'
    },
    {
        title: 'Q3/ How do you uset',
        content: 'A3/ You use React by creating components'
    }


]

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};