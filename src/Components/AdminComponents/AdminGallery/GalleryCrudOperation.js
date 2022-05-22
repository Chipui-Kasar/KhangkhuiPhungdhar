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
import moment from "moment";
import ReactPaginate from "react-paginate";
import "./AdminGalleryComponent.css";

const GalleryCrudOperation = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const storage = getStorage();

  //get all the images from the database and perform CRUD operations
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Gallery"));
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
        const querySnapshot = await getDocs(collection(db, "Gallery"));
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
    return b.timeStamp - a.timeStamp;
  });
  let newsortedData = sortedData.slice(offset, offset + perPage);

  const handleCrudOperation = async (id, url, action) => {
    //show alert message do you really want to delete?
    if (action === "delete") {
      const desertRef = ref(storage, `${url}`);
      if (window.confirm("Do you really want to delete?")) {
        await deleteDoc(doc(db, "Gallery", id));
        deleteObject(desertRef)
          .then(() => {
            console.log("deleted");
            loadData();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        return;
      }
    } else {
      await updateDoc(doc(db, "Gallery", id), {
        title: prompt("Enter new title"),
        uploader: prompt("Enter your Name"),
      });
      loadData();
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
    <div style={{ overflow: "auto" }}>
      <table className="table table-striped table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th>Action</th>
            <th scope="col">Title</th>
            <th scope="col">Uploader</th>
            <th scope="col">Image</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {newsortedData.map((item, index) => {
            //format timeStamp to be more readable
            return (
              <tr key={index}>
                <td>
                  <button
                    className="btn"
                    onClick={() =>
                      handleCrudOperation(item.id, item.imageURL, "edit")
                    }
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </td>
                <td>{item.title}</td>
                <td>{item.uploader}</td>
                <td>
                  <img
                    src={item.imageURL}
                    alt="gallery"
                    loading="lazy"
                    width="70"
                    height="70"
                    className="crudImage"
                  />
                </td>
                <td>{moment(item.timeStamp.toDate()).format("MMMM Do YY")}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      handleCrudOperation(item.id, item.imageURL, "delete")
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
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
  );
};

export default GalleryCrudOperation;
