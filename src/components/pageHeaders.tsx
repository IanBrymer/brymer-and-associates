import React from 'react'
import '../App.css';

const PageHeaders = (props: { height: string, header: string, fontSize: string, backgroundFontSize: string }) => {
    return (
        <div className="foreground" style={{ height: props.height }}>
            <div className="background">
                <p style={{ fontSize: props.backgroundFontSize }}>{props.header}</p>
            </div>
            <p style={{ fontSize: props.fontSize }}>{props.header}</p>
        </div>
    )
}

export default PageHeaders;