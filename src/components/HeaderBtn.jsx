import React, { Component } from "react"
import styled from "styled-components"
import { MorphReplace } from "react-svg-morph"

// class Cross extends Component {
//   render() {
//     return (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
//         <g id="cross" data-name="cross" transform="translate(-310.886 -35.151)">
//           <rect
//             data-name="Rectangle 12"
//             width="50.83"
//             height="5.739"
//             rx="2.869"
//             transform="translate(310.886 71.093) rotate(-45)"
//             fill="#28282a"
//           />
//           <rect
//             data-name="Rectangle 13"
//             width="33.21"
//             height="7"
//             rx="3.5"
//             transform="translate(314.282 54.415)"
//             fill="#28282a"
//             opacity="0"
//           />
//           <rect
//             id="Rectangle_14"
//             data-name="Rectangle 14"
//             width="50.83"
//             height="5.739"
//             rx="2.869"
//             transform="translate(314.944 35.151) rotate(45)"
//             fill="#28282a"
//           />
//         </g>
//       </svg>
//     )
//   }
// }

class HeaderBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.onClickHeader = this.onClickHeader.bind(this)
  }
  onClickHeader() {
    this.setState({ clicked: !this.state.clicked }, () => {
      if (this.props.onClickHeader !== null) {
        this.props.onClickHeader(this.state.clicked)
      }
    })
  }
  render() {
    return (
      <Container onClick={this.onClickHeader}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40">
          <G
            id="hamburger"
            data-name="hamburger"
            transform="translate(-304.282 -43.047)"
          >
            <rect
              data-name="Rectangle 12"
              width="60"
              height="7"
              rx="3.5"
              transform="translate(304.282 43.047)"
              fill="#28282a"
            />
            <rect
              data-name="Rectangle 13"
              width="42"
              height="7"
              rx="3.5"
              transform="translate(322.282 59.547)"
              fill="#28282a"
            />
            <rect
              data-name="Rectangle 14"
              width="18"
              height="7"
              rx="3.5"
              transform="translate(346.282 76.047)"
              fill="#28282a"
            />
          </G>
        </Svg>
      </Container>
    )
  }
}

// class HeaderBtn extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       checked: false,
//     }
//     this.toggleChecked = this.toggleChecked.bind(this)
//   }
//   toggleChecked() {
//     this.setState({ checked: !this.state.checked })
//   }
//   render() {
//     return (
//       <Container onClick={this.toggleChecked}>
//         <MorphReplace width={100} height={100}>
//           {this.state.checked ? (
//             <Cross key="checked" />
//           ) : (
//             <Hamburger key="checkbox" />
//           )}
//         </MorphReplace>
//       </Container>
//     )
//   }
// }

export default HeaderBtn

const Container = styled.div`
  display: flex;
  z-index: 999;
`

const Svg = styled.svg`
  height: 3.5vw;
  box-sizing: content-box;
  padding: 20px;
  padding-right: 0;
  width: auto;
  @media (max-width: 414px) {
    height: 20px;
  }
`

const G = styled.g``
