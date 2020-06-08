import styled from 'styled-components';
// import {
//   borderRadius,
//   colors,
//   fontSizeMap,
//   spacing,
//   dashboard,
// } from  //'../../constants/styles';

export const liLabel = styled.li`
    width: 2em;
    height: 2em;
    text-align: center;
    line-height: 2em;
    border-radius: 1em;
    background: dodgerblue;
    margin: 0 1em;
    display: inline-block;
    color: white;
    position: relative;
  }
 `;

//   li::before{
//     content: '';
//     position: absolute;
//     top: .9em;
//     left: -4em;
//     width: 4em;
//     height: .2em;
//     background: dodgerblue;
//     z-index: -1;
//   }

//   li:first-child::before {
//     display: none;
//   }

//   .active {
//     background: dodgerblue;
//   }

//   .active ~ li {
//     background: lightblue;
//   }

export default {
  liLabel,
};
