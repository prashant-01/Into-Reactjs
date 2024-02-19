import React from "react";
import UserClass from "./UserClass"

class AboutClass extends React.Component{
    constructor(props){
        //  executing the parent class's constructor and setting parent's "this" value to the value of "this" in the child component.
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent componentDidMount")
    }
    componentDidUpdate(){
        console.log("Parent componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("Parent componentWillUnmount")
    }
    render(){
        console.log("Parent render")
        return (
            <div>
                <UserClass name={"User 1"}/>
                <UserClass name={"User 2"}/>
                <UserClass name={"User 3"}/>
            </div>
        )
    }
}

export default AboutClass;