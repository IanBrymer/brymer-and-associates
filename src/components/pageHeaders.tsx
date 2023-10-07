import React from 'react'
import '../App.css';

const PageHeaders = (props: { height: string, header: string, fontSize: string, backgroundFontSize: string }) => {
    return (
        <div className="foreground">
            <div className="background">
                <p>{props.header}</p>
            </div>
            <p>{props.header}</p>
        </div>
    )
}

export default PageHeaders;