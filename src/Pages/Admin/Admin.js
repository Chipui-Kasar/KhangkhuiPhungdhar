import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free";
import "./Admin.css";
import { storage } from "./firebase";
import { ref, uploadBytesResumable } from "@firebase/storage";
import Compressor from "compressorjs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import sheetdb from "sheetdb-node";
import draftToHtml from "draftjs-to-html";
import GoogleAds from "../GoogleAds/GoogleAds";
function Admin() {
  const [title, setTitle] = useState("");
  // const [source, setSource] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);
  const [preview, setPreview] = useState("");
  //-------------Blog useState------------------
  const [blogID, setBlogID] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDisplayContent, setBlogDisplayContent] = useState("");
  const [blogImageUrl, setBlogImageUrl] = useState("");
  const [blogAltImage, setBlogAltImage] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogSocialLink, setBlogSocialLink] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showBlog, setShowBlog] = useState(false);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var file = e.target.image.files[0];
    //compressing image
    if (!file) {
      return;
    }
    new Compressor(file, {
      quality: 0.8,
      minHeight: 600,
      minWidth: 600,
      maxHeight: 1800,
      maxWidth: 1800,

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

    //-------------------------

    //-------------------------
  }, [progress, status, title]);

  const uploadFiles = (file) => {
    //replace only file name
    const fileExtension = file.name.split(".").pop();
    const filePath = `.${fileExtension}`;
    //get today's date
    const date = new Date();
    const day = date.getDate();
    //add 0 if day is less than 10
    const newDay = day < 10 ? `0${day}` : day;
    const monthName = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    //get current time
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    const dateString = `${newDay}-${monthName}-${year}, ${time}`;

    if (!file) return;
    const storageRef = ref(
      storage,
      `/file/${title.toUpperCase()}${filePath} on ${dateString}`
    );

    uploadBytesResumable(storageRef, file).then(
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => console.log(error)
    );
  };

  //preview selected image before uploading
  const handleImageChange = (e) => {
    setImage(e.target.value);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  //get google browser login user name
  useEffect(() => {
    <GoogleAds />;
    //create a unique id
    const id = Math.random().toString(36).substr(2, 9);
    setBlogID(id);
  }, []);

  //get today's date
  const date = new Date();
  const day = date.getDate();
  //format date to 13-jan-2020
  const newDay = day < 10 ? `0${day}` : day;
  const monthName = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const todayDate = `${newDay}-${monthName}-${year}`;

  const submitBlog = () => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    var config = {
      address: "7ehz82f9q7n6p",
    };
    // Create new client
    var client = sheetdb(config);
    if (
      blogTitle !== "" &&
      blogDisplayContent !== "" &&
      blogImageUrl !== "" &&
      blogAltImage !== "" &&
      blogAuthor !== "" &&
      blogSocialLink !== ""
    ) {
      var showModal = document.getElementById("loadingModal");
      showModal.style.display = "block";
      document.getElementById("rte-contentBox").style.visibility = "hidden";
      client
        .create(
          {
            id: blogID,
            title: blogTitle,
            date: todayDate,
            displaytext: blogDisplayContent,
            description: html,
            src: blogImageUrl,
            alt: blogAltImage,
            author: blogAuthor,
            socialsite: blogSocialLink,
          },
          "Blog"
        )
        .then(
          function (data) {
            var hideModal = document.getElementById("loadingModal");
            hideModal.style.display = "none";
            //add text in successUpload
            //vanish after 3 seconds
            document.getElementById(
              "successUpload"
            ).innerHTML = `Blog Uploaded Successfully`;
            setTimeout(function () {
              document.getElementById("successUpload").innerHTML = "";
            }, 3000);

            //clear all fields
            setBlogTitle("");
            setBlogDisplayContent("");
            setBlogImageUrl("");
            setBlogAltImage("");
            setBlogAuthor("");
            setBlogSocialLink("");
            setEditorState(EditorState.createEmpty());
            setShowBlog(false);
          },
          function (err) {
            console.log(err);
          }
        );
    } else {
      alert("Please fill all fields");
    }
    //create a unique id
    const id = Math.random().toString(36).substr(2, 9);
    setBlogID(id);
  };
  const logIn = () => {
    //close modal pop up if the credentials are correct
    if (
      document.getElementById("userID").value === "admin" &&
      document.getElementById("password").value === "admin"
    ) {
      //add class name to modal container
      document
        .getElementsByClassName("modal-backdrop")[0]
        .classList.replace("show", "hide");
      document
        .getElementById("modalContainer")
        .classList.replace("show", "hide");
      setShowBlog(true);
    } else {
      alert("Invalid Credentials");
    }
  };
  const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row table-bordered">
          <div className="col-12">
            <div className="mt-4 mb-3" style={{ fontSize: "calc(1em + 1vw)" }}>
              Upload Image
            </div>

            <div className="container">
              <form className="form" onSubmit={handleSubmit} method="POST">
                <div className="form-group row">
                  <div
                    className="text-success mb-2 "
                    style={{
                      fontStyle: "italic",
                      fontSize: "calc(.7em + 1vw)",
                    }}
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
                      onChange={(e) => setTitle(e.target.value)}
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
                    {preview && image ? (
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
      <hr />
      <div className="container">
        <div id="successUpload" className="text-success"></div>
      </div>
      {showBlog === false && (
        <div className="container">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modalContainer"
          >
            Submit a new Blog
          </button>
        </div>
      )}

      <div
        className="modal fade"
        id="modalContainer"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign in to post new Blog
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="userID">User ID</label>
                      <input
                        type="email"
                        className="form-control"
                        id="userID"
                        aria-describedby="emailHelp"
                        placeholder="User ID"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={logIn}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* loading modal */}
      <div id="loadingModal" className="loadingModal">
        <div className="modal-contents text-center">
          <p>Upload is in Progress, Please wait</p>
          <i className="fa fa-3x fa-spinner fa-spin ml-2 mb-3"></i>
        </div>
      </div>

      {showBlog === true && (
        <section style={{ fontSize: "16px" }}>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
                <h1 className="mb-4">Submit a new Blog</h1>
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">ID</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control"
                          value={blogID}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Title</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          id="blogTitle"
                          className="form-control"
                          placeholder="Blog Title"
                          onChange={(e) => setBlogTitle(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Posted Date</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          value={todayDate}
                          id="blogDate"
                          className="form-control"
                          placeholder="Posted Date"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Display Text</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          id="blogDisplayText"
                          className="form-control"
                          placeholder="Display Text"
                          onChange={(e) =>
                            setBlogDisplayContent(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Description</h6>
                      </div>
                      <div className="col-md-9 pe-5" id="rte-contentBox">
                        <Editor
                          editorState={editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={onEditorStateChange}
                        />
                      </div>
                    </div>
                    <div>{html}</div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Image</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          id="imageUrl"
                          value={blogImageUrl}
                          className="form-control"
                          placeholder="Paste Image url (Https://.....)"
                          onChange={(e) => setBlogImageUrl(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Alt of the Image</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          id="imageAlt"
                          value={blogAltImage}
                          className="form-control"
                          placeholder="Eg: Khangkhui Picture"
                          onChange={(e) => setBlogAltImage(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Author/Writer</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          id="author"
                          value={blogAuthor}
                          className="form-control"
                          placeholder="Eg: John Smith"
                          onChange={(e) => setBlogAuthor(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Social Media Link</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          id="socialSite"
                          value={blogSocialLink}
                          className="form-control"
                          placeholder="https://wwww.instagram.com/khangkhui"
                          onChange={(e) => setBlogSocialLink(e.target.value)}
                        />
                        <input
                          type="text"
                          id="dummy"
                          style={{ display: "none" }}
                          className="form-control"
                          placeholder="https://wwww.instagram.com/khangkhui"
                          onChange={(e) => setBlogSocialLink(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="px-5 py-4">
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={submitBlog}
                      >
                        Post Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Admin;
