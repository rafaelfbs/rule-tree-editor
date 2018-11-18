import React from "react";
import Editor from "../components/editor/Editor";
import Viewer from "../components/viewer/Viewer";

export default class EditorPage extends React.Component {
  state = { code: "" };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="editor">
            <Editor code={this.state.code} onCodeChange={code => this.setState({ code })} />
          </div>
          <div className="viewer">
            <Viewer code={this.state.code} />
          </div>
        </div>
        <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }
        .editor {
          flex: 0.75;
          background-color: #1e1e1e;
        }
        .viewer {
          flex: 0.25;
          padding: 10px;
          color: #d4d4d4;
          font-family: Consolas, "Courier New", monospace;
          background-color: #1e1e1e;
          border-top: 1px solid #404040;
        }
        `}</style>
        <style jsx global>{`
        html, body, #__next {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        `}</style>
      </React.Fragment>
    );
  }
}
