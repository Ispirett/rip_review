import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'business', text: 'Business', value: 'business' },
    { key: 'apartment', text: 'Apartment', value: 'apartment' },
    { key:'miscellaneous', text:'Miscellaneous', value: 'miscellaneous'},
    { key: 'bank', text:'Bank', value: 'bank'},

];

const SiteSearch= () => (
    <div className={'wrapper shadow-mid'}>
        <Dropdown  placeholder='Skills' fluid multiple selection options={options} />
    </div>

)

export default SiteSearch