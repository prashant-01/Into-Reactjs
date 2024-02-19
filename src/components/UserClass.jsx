import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : [] ,
        }
        console.log( this.props.name ,  "Constructor" )
    }
    
    async componentDidMount(){
        console.log( this.props.name , "componentDidMount" )
        const res = await fetch( "https://dummyjson.com/users" );
        const jsonData = await res.json();
        console.log(jsonData.users) 
        this.setState({
            users : jsonData.users ,
        });
    }

    componentDidUpdate(){
        console.log( this.props.name ,  "componentDidUpdate");
    }

    componentWillUnmount(){
        console.log(this.props.name ,  "Component unmounted")
    }
    render(){
        console.log(this.props.name , "Render");
        // const { users } = this.props;
        const { users } = this.state;
        return (
            <div className="border p-3">
                <p className="text-xl font-bold">About Class</p>
                <div className="flex gap-4 flex-wrap">
                    {
                        users.map( user => (
                            <div key={user.id}
                            className="border border-black flex flex-col gap-2 p-4 bg-gray-300">
                                <div className="flex gap-2">
                                    <img src={ user.image }/>
                                    <p>{ user.firstName } + { user.lastName }</p>
                                </div>
                                <p>{ user.company.department }</p>
                                <p>{ user.address.city }</p>
                                <p>{ user.address.address }</p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        )
    }
}

export default UserClass;