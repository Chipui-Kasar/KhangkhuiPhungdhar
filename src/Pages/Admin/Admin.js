import React, { useEffect, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytesResumable } from "@firebase/storage";

function Admin() {
  const [title, setTitle] = useState("");
  // const [source, setSource] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    var file = e.target.image.files[0];
    //upload title, source, and image to firebase
    uploadFiles(file);
    setStatus(true);
    //reset form after upload is complete
  };
  useEffect(() => {
    if (progress === 100 && status === true) {
      setTitle("");
      // setSource("");
      setImage("");
      setProgress(0);
      setStatus(false);
      alert("Upload Complete");
    }
  }, [progress, status]);

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
    console.log(time);

    const dateString = `${day}-${monthName}-${year}, ${time}`;

    if (!file) return;
    const storageRef = ref(
      storage,
      `/file/${title.toUpperCase()}${filePath} on ${dateString}`
    );
    uploadBytesResumable(storageRef, file).then(
      snapshot => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(prog);
        setProgress(prog);
      },
      error => console.log(error)
    );
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
                      onChange={e => setImage(e.target.value)}
                    />
                  </div>
                </div>
                {status ? ( //if status is true, show progress bar
                  <div>{progress}% uploaded </div> //else show nothing
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
