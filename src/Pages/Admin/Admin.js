import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free";
import "./Admin.css";
import { storage } from "./firebase";
import { ref, uploadBytesResumable } from "@firebase/storage";
import Compressor from "compressorjs";
function Admin() {
  const [title, setTitle] = useState("");
  // const [source, setSource] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);
  const [preview, setPreview] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    var file = e.target.image.files[0];

    //compressing image
    if (!file) {
      return;
    }

    new Compressor(file, {
      quality: 0.8,
      minHeight: 500,
      minWidth: 500,
      maxHeight: 1000,
      maxWidth: 1000,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        // The third parameter is required for server

        // Send the compressed image file to server with XMLHttpRequest.
        uploadFiles(result);
        setStatus(true);
      },
      error(err) {
        console.log(err.message);
      },
    });

    //reset form after upload is complete
  };

  useEffect(() => {
    if (progress === 100 && status === true) {
      setTitle("");
      // setSource("");
      setImage("");
      setProgress(0);
      setStatus(false);
      setPreview("");
      alert("Upload Complete");
    }
  }, [progress, status, title]);

  const uploadFiles = file => {
    //replace only file name
    const fileExtension = file.name.split(".").pop();
    const filePath = `.${fileExtension}`;
    //get today's date
    const date = new Date();
    const day = date.getDate();
    const monthName = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    //get current time
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    const dateString = `${day}-${monthName}-${year}, ${time}`;

    if (!file) return;
    const storageRef = ref(
      storage,
      `/file/${title.toUpperCase()}${filePath} on ${dateString}`
    );
    uploadBytesResumable(storageRef, file).then(
      snapshot => {
        console.log(snapshot);
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      error => console.log(error)
    );
  };
  //preview selected image before uploading
  const handleImageChange = e => {
    setImage(e.target.value);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row table-bordered">
          <div className="col-12">
            <div className="mt-4 mb-3">Upload Image</div>

            <div className="container">
              <form className="form" onSubmit={handleSubmit} method="POST">
                <div className="form-group row">
                  <div
                    className="text-success mb-2"
                    style={{ fontStyle: "italic" }}
                  >
                    Note: Please give appropriate "TITLE" for the Image
                  </div>
                  <div className="col-sm-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      placeholder="Image Title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className="col-sm-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="source"
                      id="source"
                      placeholder="Uploader name"
                      value={source}
                      onChange={e => setSource(e.target.value)}
                    /> 
                  </div> */}
                  <div className="col-sm-12">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      placeholder="Select Image"
                      required
                      value={image}
                      onChange={handleImageChange}
                    />
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      maxHeight: "500px",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    {preview ? (
                      <>
                        <img
                          src={preview}
                          alt={title}
                          className="img-thumbnail"
                          style={{
                            maxHeight: "500px",
                            position: "relative",
                            width: "80%",
                            objectFit: "cover",
                          }}
                        />
                        <label className="previewTitle">{title}</label>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {status && progress !== 100 ? (
                  <>
                    <label>Upload is in progress please wait</label>
                    <i className="fa fa-3x fa-spinner fa-spin ml-2 mb-3"></i>
                  </>
                ) : (
                  ""
                )}
                <div className="form-group row">
                  <div className="col-sm-10">
                    {/* if submit is clicked, disable the button */}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
