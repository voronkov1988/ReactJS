import React from 'react'
import styled from 'styled-components'
import Header from '../../Header'
import Footer from '../../Footer'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

class OnePage extends React.Component{
    render(){
        return(
            <>
            <Helmet>
                <title>{this.props.fields.title}</title>
            </Helmet>
                <Header/>
                <Wrapp>
                    <Img src={this.props.fields.imgLink}/>
                    <Wrapp2>
                        <Title>{this.props.fields.title}</Title>
                        <Description>{this.props.fields.description}</Description>
                        <Price>
                            <PriceSpan>{`Price - ${this.props.fields.price}`}</PriceSpan>
                            <Buy>Купить</Buy>
                        </Price>
                        <Link to='/'><Back>Назад</Back></Link>
                    </Wrapp2>
                </Wrapp>
                <Footer/>
            </>
        )
    }
}



const Back = styled.button`
    width: 100px;
    height: 50px;
`;

const Buy = styled.button`
    width: 30%;
    background-color: yellow;
`;

const PriceSpan = styled.div`
    font-size: 5em;
    background-color: black;
    font-weight:bolder;
    color: white;
`;

const Description = styled.p`
    font-size: 1.4em;
    font-weight:bolder;
`;

const Price = styled.div`
    width: 80%;
    height: 6em;
    background-color: silver;
    display:flex;
    justify-content:space-between;
`;

const Title = styled.h2`
    font-size: 2.5em;
    color: red;
    margin-left: 30%;
`;

const Wrapp2 = styled.div`
    width: 80%;
    margin-left: 10%;
`;

const Wrapp = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
`;

const Img  = styled.img`
    max-width:300px;
`;

export default OnePage