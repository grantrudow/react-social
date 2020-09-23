import React, {useEffect, useState} from 'react';
import './Sidebar.css';

function Sidebar({ width, height, children}) {
    const [xPosition, setX] = useState(-width);

    const toggleMenu = () => {
        if(xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    }

    useEffect(() => {
        setX(0)
    }, []);

    return (
        <React.Fragment>
            <div 
                className="sidebar" 
                style={{
                    transform: `translate(${xPosition}px)`,
                    width: width, 
                    minHeight: height
                }}
            >
                <button 
                    onClick={() => toggleMenu()}
                    className="toggle-menu"
                    style={{
                        transform: `translate(${width}px, 20vh)`
                    }}
                >
                </button>
                <div className="content">{children}</div> 
            </div>
        </React.Fragment>

    )
}

export default Sidebar
