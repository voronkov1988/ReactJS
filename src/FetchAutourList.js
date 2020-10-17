import React from 'react'
import AutourCard from './AutourCard'
import withData from './HOC/withData'
import withLoader from './HOC/HOCWithLoader'
import styled  from 'styled-components'


class FetchAutourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            autours: null,
            showAllAutours: false,
            isLoading: true
        }
    }
    showLimit(){
        const {autours, showAllAutours} = this.state;
        return showAllAutours ? this.state.length : 3
    }

    showToogle(){
        this.setState({showAllAutours: !this.state.showAllAutours})
    }

    render(){
        const autourList = this.props.value.slice(0,this.showLimit())
        return(
            <div>
            <AutourWrap>
                {
                   autourList.map(item => {
                        return (
                            <AutourCard isLoading={!this.state.isLoading} key={item.fields.id} {...item.fields}/>
                        )
                    })
                }
            </AutourWrap>
            <Button onClick={()=>this.showToogle()}>Показать всех авторов</Button>
            </div>
        )
    }
}

const AutourWrap = styled.div`
    margin: 10px 10px;
`;

const Button = styled.button`
    margin: 10px 10px;
    margin-left: 35%;
`;

export default withData(withLoader(FetchAutourList), 'autour', 'clients')