import React from 'react'
import { ThemeBTN } from '../Context/Context'

class ChangeThemes extends React.Component {

    render() {
        
        let props = this.props
        let theme = this.context

        return (
                <button 
                {...props}
                style={{backgroundColor: theme.background, marginRight: '10px'}}
                 />
        )

    }
}

ChangeThemes.contextType = ThemeBTN;

export default ChangeThemes;