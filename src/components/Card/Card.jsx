import React from "react";
import "./card.css";
import { useState } from "react";
import {
  deleteUserDataRequest,
  editUserDataRequest,
} from "../../redux/Notes/actions";
import { useDispatch, useSelector } from "react-redux";
function Card({ title, content, id }) {
  const [edittitle, setEditTitle] = useState("");
  const [editcontent, setEditContent] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.uid);
  const handleDoc = (id, userId) => {
    dispatch(deleteUserDataRequest(id, userId));
  };
  const handleEditNotes = function (id, userId) {
    // console.log("🚀 ~ handleEditNotes ~ d , user:", id, userId);
    setIsEditable(true);
    setEditTitle(title);
    setEditContent(content);
  };
  const editHandler = function (id, userId) {
    const editData = {
      id: id,
      userId: userId,
      title: edittitle,
      content: editcontent,
    };
    dispatch(editUserDataRequest(editData));
  };
  return (
    <div className="card-conatiner">
      {isEditable ? (
        <>
          <div className="notes-group">
            <label htmlFor="title" className="notes-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={edittitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="notes-input"
            />
          </div>
          <div className="notes-group">
            <label htmlFor="postContent" className="notes-label">
              Content
            </label>
            <textarea
              name="postContent"
              id="postContent"
              rows="7"
              cols="50"
              value={editcontent}
              onChange={(e) => setEditContent(e.target.value)}
              className="notes-textarea"
            ></textarea>
          </div>
          <div className="edit-notes-btn">
          <button className="cancel-notes-btn" onClick={() => setIsEditable(false)}>Cancel</button>
          <button className="save-notes-btn" onClick={() => editHandler(id, userId)}>Save</button>
          </div>
        </>
      ) : (
        <div>
          <h3 className="card-heading"> {title}</h3>
          <p className="card-para">{content}</p>
          <div className="card-btn">
            <button className="del-btn" onClick={() => handleDoc(id, userId)}>
              Delete
            </button>
            <button
              className="edit-btn"
              onClick={() => handleEditNotes(id, userId)}
            >
              Edit Notes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
