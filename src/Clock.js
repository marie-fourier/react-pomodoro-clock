import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
  	width: 412px;
		height: 412px;
    background: ${(props => {
      let {progress} = props;
      if(progress === undefined)
        return '#4870f6';
      progress = parseInt(progress.toString(), 10);
      return `linear-gradient(to bottom, 
                              white 0%, 
                              white ${progress}%, 
                              #4870f6 ${progress + 1}%, 
                              #4870f6 100%);`;
    })};
		border: 1px solid #4870f6;
		border-radius: 100%;
		padding: 6px;
		margin: 40px auto;
`;

const Clock = styled.div`
  	width: 400px;
		height: 400px;
		background: #a4b9ff;
		border-radius: 100%;
		position: relative;
`
const Timer = styled.div`
		position: absolute;
		text-align: center;
		vertical-align: middle;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 6em;
    font-family: sans-serif;
`

const Message = styled.div`
    position: absolute;
    text-align: center;
		color: white;
		font-size: 2.3em;
    top: 30%;
`

export default ({progress, children}) =>
      <Border progress={progress}>
        <Clock>
          {progress === undefined ? <Message>{children}</Message> : <Timer>{children}</Timer>}
        </Clock>
      </Border>