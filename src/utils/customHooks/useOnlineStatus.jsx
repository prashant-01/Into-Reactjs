import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [ onlineStatus , setOnlineStatus ] = useState(true);

    useEffect( () => {
        window.addEventListener( "offline" , () => {
            setOnlineStatus(false);
        } );
        window.addEventListener( "online" , () => {
            setOnlineStatus(true);
        } );

        // unmounting
        return () => {
            window.removeEventListener( "offline" , () => {
                setOnlineStatus(false);
            } );
            window.removeEventListener( "online" , () => {
                setOnlineStatus(true);
            } );
        }
    } , []);
    return onlineStatus;
}

return useOnlineStatus;

export default useOnlineStatus;