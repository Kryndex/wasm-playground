import React from 'react'

import InfoPopup from './InfoPopup'
import DropdownMenu from './DropdownMenu'

var HeaderBar = React.createClass({
    render(){
        return (
        <div className="header-bar">
            <h1>ast.run</h1><h2>WebAssembly playground</h2>
            <div className="header-ui">
                <DropdownMenu label="Example:" options={this.props.examples} onSelect={this.props.onExampleChange}/>
                <DropdownMenu label="Text format:" options={formats} onSelect={this.props.onFormatChange}/>
                <InfoPopup />
            </div>
        </div>
        )
    }
})

var formats = [
    {className: 's-expression', name: 's-expression'},
    {className: 'indentation', name: 'indentation'}
]

export default HeaderBar