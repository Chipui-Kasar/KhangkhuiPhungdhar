import React, { useContext, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free";
import "./AdminGalleryComponent.css";
import { db, storage } from "../../../Pages/Admin/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Compressor from "compressorjs";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { AuthContext } from "../../../Pages/Admin/AdminPages/Login/AuthContext";
import GalleryCrudOperation from "./GalleryCrudOperation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminGalleryComponent() {
  const [title, setTitle] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  // const [source, setSource] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);
  const [preview, setPreview] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  let email = isAuthenticated.providerData[0].email;
  let displayName = isAuthenticated.providerData[0].displayName;
  useEffect(() => {
    setUploaderName(
      displayName !== null
        ? displayName
        : email === "Admin@khangkhuiphungdhar.com" ||
          email === "admin@khangkhuiphungdhar.com"
        ? "Admin"
        : email
    );
  }, [displayName, email]);
  const handleAllSubmit = async (imageURL) => {
    await addDoc(collection(db, "Gallery"), {
      title: title,
      uploader: uploaderName,
      email: email,
      imageURL: imageURL,
      timeStamp: serverTimestamp(),
    });
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
      toast.success("Added Successfully", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((imageURL) => {
          handleAllSubmit(imageURL);
        });
      }
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
  return (
    <>
      <ToastContainer />
      {!showUpload && (
        <button
          className="btn btn-outline-success"
          onClick={() => setShowUpload(!showUpload)}
        >
          Upload Image
        </button>
      )}

      {showUpload && (
        <div className="container">
          <div className="row table-bordered">
            <div className="col-12">
              <div
                className="mt-4 mb-3"
                style={{ fontSize: "calc(1em + 1vw)" }}
              >
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
                    <div className="col-sm-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="uploaderName"
                        id="uploaderName"
                        placeholder="Uploader's name"
                        value={uploaderName}
                        onChange={(e) => setUploaderName(e.target.value)}
                      />
                    </div>
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
      )}
      <hr />
      <div className="container">
        <div id="successUpload" className="text-success"></div>
      </div>
      <GalleryCrudOperation />
    </>
  );
}

export default AdminGalleryComponent;
