const div = React.createElement( "div" , {id : "parent" , xyz : "hello"} , [
    React.createElement( "div1" , {id : "div-1"} , [
        React.createElement( "h1" , { id: "heading-1" } , "Heading-1" ) ,
        React.createElement( "h2" , { id: "heading-2" } , "Heading-2" )
    ] ) ,
    React.createElement( "div2" , {id : "div-2"} , [
        React.createElement( "h1" , { id: "heading-3" } , "Heading-3" ) ,
        React.createElement( "h2" , { id: "heading-4" } , "Heading-4" )
    ] )
] );
const root = ReactDOM.createRoot( document.getElementById("root") );
root.render(div);