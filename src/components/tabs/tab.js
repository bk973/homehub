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
                activeTab, label, icon
            },
        } = this

        let className = ''

        if ( activeTab === label) {
            className += 'is-active'
        }
        return (
               <li className={className} onClick={onClick}>
                   <Link>
                   <span className="icon is-small">
                      <i className={icon} aria-hidden="true"></i>
                   </span>
                   <span>
                         {label}
                   </span>
                   </Link>
               </li>
           
        )
    }
}
export default Tab
