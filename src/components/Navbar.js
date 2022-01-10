import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accountSelector } from '../store/selectors'
import Logo from '../assets/Logo.png'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#/">
          <img className="Logo" src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link small"
              href={`https://etherscan.io/address/${this.props.account}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'black',
                backgroundColor: 'orange',
                fontSize: '15px',
                padding: '5px',
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  fontSize: '13px',
                  padding: '4px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  marginRight: '10px',
                }}
              >
                Wallet:
              </span>
              {this.props.account}
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state),
  }
}

export default connect(mapStateToProps)(Navbar)
