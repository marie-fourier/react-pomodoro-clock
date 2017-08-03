import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
		cursor: pointer;
		text-decoration: none;
		color: white;
		border-radius: 6px;
		padding: 20px 40px;
		font-size: 1.4em;
    background: ${props => props.backgroundColor};
    &:hover {
      background: ${props => props.onHoverBackgroundColor}
    };
`

const Controll = styled.div`
		width: 350px;
		margin: 0 auto;
`;

export default ({onStart, onStop}) =>
				<Controll>
					<Button 
						backgroundColor="#1abc9c" 
						onHoverBackgroundColor="#27ae60"
						style={{float: 'left'}}
						onClick={onStart}>Start</Button>
					<Button 
						backgroundColor="#e74c3c" 
						onHoverBackgroundColor="#c0392b"
						style={{float: 'right'}}
						onClick={onStop}>Stop</Button>
				</Controll>