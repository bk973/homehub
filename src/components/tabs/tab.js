import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    onClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }
    render() {
        const {
            onClick,
            props: {
                activeTab, label
            },
        } = this

        let className = ''

        if ( activeTab === label) {
            className += 'is-active'
        }
        return (
               <li className={className} onClick={onClick}>
                   <Link>
                        {label}
                   </Link>
               </li>
           
        )
    }
}
export default Tab
