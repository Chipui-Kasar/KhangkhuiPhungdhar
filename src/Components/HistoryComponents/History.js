import React, { useEffect, useState } from "react";
import "./History.css";
import button from "../../images/button.png";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import sheetdb from "sheetdb-node";

function History() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  useEffect(() => {
    var config = {
      address: "7ehz82f9q7n6p",
    };

    // Create new client
    var client = sheetdb(config);
    client.create({ name: "William", age: 25 }, "Blog").then(
      function (data) {
        console.log(data);
      },
      function (err) {
        console.log(err);
      }
    );
    const html = convertToHTML(editorState.getCurrentContent());
    console.log(html);
  }, [editorState]);
  return (
    <div>
      <section className="mt-4 text-center">
        <div>
          <h1 className="title">History of Khangkhui Khunou Kasar Shang</h1>
        </div>
      </section>
      <div>
        <div className="col-md-3"></div>
        <div className="col-md-6 video-align">
          <div className="card mb-4 shadow-lg">
            <iframe
              width="100%"
              height="347px"
              id="videoframe"
              title="Khangkhui"
              src={`https://www.youtube-nocookie.com/embed/YVb2CTHFdLM?autoplay=1&modestbranding=1&iv_load_policy=3&theme=light&playsinline=1`}
              srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{background:#000;height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}</style>
  <a href=https://www.youtube-nocookie.com/embed/YVb2CTHFdLM?autoplay=1&modestbranding=1&iv_load_policy=3&theme=light&playsinline=1>
  <img src=https://img.youtube.com/vi/YVb2CTHFdLM/hqdefault.jpg>
  <img id='playbutton' src=${button} style='width: 88px; position: absolute; left: 41.5%;'></a>`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{
                border: "7px solid #424242",
                borderRadius: "7px",
              }}
            ></iframe>
            <div className="card-body">
              <p className="card-text lead">
                History of Kasar Narrated by Shangmahing Kasar
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      ;
    </div>
  );
}

export default React.memo(History);
