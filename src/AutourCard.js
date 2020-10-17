import React from 'react'
import withLoader from './HOC/HOCWithLoader'
import styled from 'styled-components'

const OneAutour = styled.div`
display: flex;
height: auto;
width: 100%;
border: 1px solid black;
`;

const Image = styled.img`
    max-width: 30%;
`;

const AutourInfoBlock = styled.div`
    font-weight:bolder;
`;
const Name = styled.h3`
    color: darkblue;
`;
const Email = styled.span`
    font-size: 1.4em;
`;

const Age = styled.span`
    margin-left: 30%;
`;

class AutourCard extends React.Component{
    render(){
 
        const {name, email, age, avatar} = this.props;
        return(
            <OneAutour>
                <Image src={avatar} alt={name}/>
                <AutourInfoBlock>
                    <Name>{name}</Name>
                    <Email>{email}</Email>
                    <Age>{age}лет</Age>
                </AutourInfoBlock>
            </OneAutour>
        )
    }
}
export default withLoader(AutourCard)


