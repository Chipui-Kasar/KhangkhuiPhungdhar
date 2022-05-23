import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
//delete from storage (image)
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../../Pages/Admin/firebase";
import ReactPaginate from "react-paginate";
import "./AdminBlogComponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const AdminBlogCrudOperation = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const storage = getStorage();
  const [disableDelete, setDisableDelete] = useState(false);
  const [search, setSearch] = useState("");

  //get all the images from the database and perform CRUD operations
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Blog"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPageCount(Math.ceil(list.length / perPage));
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [perPage]);

  //get all the images from the database

  const loadData = () => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Blog"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPageCount(Math.ceil(list.length / perPage));
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };
  //sort by latest
  const sortedData = data.sort((a, b) => {
    return moment(b.date).diff(moment(a.date));
  });

  let searchFilter = sortedData.filter((title) => {
    return title.title.toLowerCase().includes(search.toLowerCase());
  });
  let newsortedData = searchFilter.slice(offset, offset + perPage);
  const handleCrudOperation = async (id, url, action) => {
    //show alert message do you really want to delete?
    if (action === "delete") {
      const desertRef = ref(storage, `${url}`);
      if (window.confirm("Do you really want to delete?")) {
        setDisableDelete(true);
        await deleteDoc(doc(db, "Blog", id));
        deleteObject(desertRef)
          .then(() => {
            toast.success("Deleted Successfully", {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setDisableDelete(false);
            loadData();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        return;
      }
    } else {
      let title = prompt(url);
      if (title !== null) {
        await updateDoc(doc(db, "Blog", id), {
          title: title,
        });
        toast.success("Updated Successfully", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        loadData();
      }
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setOffset(newOffset);
  };
  return (
    <section>
      <ToastContainer />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Blog List</h4>
              </div>
              <input
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Display Text</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th>Social Media Link</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newsortedData.map((blog, index) => (
                        <tr key={index}>
                          <td>{blog.title}</td>
                          <td>{blog.date}</td>
                          <td>{blog.displaytext}</td>
                          <td>{blog.description}</td>
                          <td>
                            <img
                              src={blog.src}
                              alt={blog.alt}
                              className="img-fluid"
                            />
                          </td>
                          <td>{blog.author}</td>
                          <td>{blog.socialsite}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                handleCrudOperation(
                                  blog.id,
                                  blog.title,
                                  "update"
                                )
                              }
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleCrudOperation(blog.id, blog.src, "delete")
                              }
                              disabled={disableDelete}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    previousLabel="Prev"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlogCrudOperation;
