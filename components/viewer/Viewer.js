import React from "react";
import Node from "../node/Node";

export default class Viewer extends React.Component {
    render() {
        const tree = secureParse(this.props.code);
        return (
            tree && <Node node={tree} />
        );
    }
}

function secureParse(code) {
    try {
        return JSON.parse(code);
    } catch {
        return null;
    }
}