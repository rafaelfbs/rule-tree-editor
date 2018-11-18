import React from "react";

function getChildren(node) {
    switch (node.condition) {
        case "or":
        case "and": return node.rules || []
        case "not":
        case "every":
        case "some": return [node.rule];
        default: return [];
    }
}

function getNodeView(node) {
    switch (node.condition) {
        case "exists": return <ValueNode node={node} />;
        case "in":
        case "equals": return <DataValueNode node={node} />;
        case "every":
        case "some":
        case "not": return <DataRuleNode node={node} />;
        default: return <div>{ node.condition }</div>;
    }
}

const Node = ({ node }) => (
    <div className="node">
        <div className="node__view">{ getNodeView(node) }</div>
        <div className="node__children">{ getChildren(node).map((node, key) => <Node key={key} node={node} />) }</div>
        <style jsx>{`
        .node {
            display: inline-block;
            vertical-align: top;
            margin: 10px 20px;
        }
        .node__view {
            text-align: center;
        }
        `}</style>
    </div>
);

const ValueNode = ({ node }) => (
    <div>
        <div>{ node.condition }({ node.value })</div>
    </div>
);

const DataValueNode = ({ node }) => (
    <div>
        <div>{ node.condition }({ node.data }, { node.value })</div>
    </div>
);

const DataRuleNode = ({ node }) => (
    <div>
        <div>{ node.condition }</div>
    </div>
);

export default Node;
