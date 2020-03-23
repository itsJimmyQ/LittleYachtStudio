import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Header from "./header/Header"
import SEO from "./seo"
import Footer from "./Footer"

class Shell extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScrollHandler, true)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollHandler)
  }

  constructor(props) {
    super(props)

    this.state = {
      offsetMode: 0,
    }

    this.cursor = React.createRef()

    this.onScrollHandler = this.onScrollHandler.bind(this)
  }

  onScrollHandler() {
    const offsetY = window.pageYOffset
    if (offsetY === 0) {
      this.setState({ offsetMode: 0 })
    } else {
      if (this.state.offsetMode !== 1) {
        this.setState({ offsetMode: 1 })
      }
      const ifBottom =
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      if (ifBottom && this.props.bottomCheck) {
        this.setState({ offsetMode: 2 })
      }
    }
  }
  render() {
    const { title, headerLinks, bottomCheck, children } = this.props
    return (
      <Container onScroll={this.onScrollHandler}>
        <SEO title={title} />
        <Header
          offsetMode={this.state.offsetMode}
          links={headerLinks}
          bottomCheck={bottomCheck}
        />
        {children}
        <Footer />
      </Container>
    )
  }
}

Shell.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Shell

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  min-height: 100vh;
`
