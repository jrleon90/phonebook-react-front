import React,{ Component } from 'react';
import _ from 'lodash';
const URL = 'https://www.mocky.io/v2/581335f71000004204abaf83';


class ContactList extends Component{
    constructor(props){
        super(props);

        this.state={
            phoneBook: []
        };
    }

    async componentDidMount(){
        const response = await fetch(URL);
        const contacts = await response.json();
        this.setState({
            phoneBook: contacts.contacts
        });

    }
    renderElement(data){
        return(
            <tr key={data.phone_number}>
                <td>{data.name}</td>
                <td>{data.phone_number}</td>
                <td>{data.address}</td>
            </tr>
        );
    }

    async onSortData(e, sortKey){
        let data = this.state.phoneBook;
        data = _.sortBy(data,[sortKey]);
        this.setState({
            phoneBook: data
        })
    }

    componentWillReceiveProps(nextProps){
        let data = this.state.phoneBook;
        data = _.filter(data,{'name':nextProps.searchTerm});
        this.setState({
            phoneBook: data
        })
    }

    render(){
        if(this.state.phoneBook.length === 0){
            return(
                <div>
                    <p>Loading</p>
                </div>
            )
        }
        return(
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="table-header" onClick={e=>this.onSortData(e,'name')}>Name</th>
                            <th className="table-header" onClick={e=>this.onSortData(e,'phone_number')}>Phone</th>
                            <th className="table-header" onClick={e=>this.onSortData(e,'address')}>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.phoneBook.map(this.renderElement)}
                    </tbody>
                </table>
        )
    }
}

export default ContactList;
