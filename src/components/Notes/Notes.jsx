import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserDataRequest,
  fetchUserDataRequest,
} from "../../redux/Notes/actions";
import "./notes.css";
import { useNavigate } from "react-router-dom";
import { logoutUserRequest } from "../../redux/Auth/actions";

function Notes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.uid);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill out both fields.");
      return;
    }
    const data = {
      title,
      content,
      userId,
      allowesUser: [userId],
      requestaccess: [],
      createdAt: new Date().toISOString(),
    };
    dispatch(addUserDataRequest(data));

    setTitle("");
    setContent("");
  };
  const logoutHandler = function () {
    dispatch(logoutUserRequest());
  };

  const fetchNotes = () => {
    dispatch(fetchUserDataRequest(userId));
    // dispatch(shareUserDataRequest(userId));
    navigate(`/notes/${userId}`);
  };
  const shareHandler = function () {
    navigate(`/share-notes`);
  };

  return (
    <div className="notes-container">
      <form className="notes-form" onSubmit={handleSubmit}>
        <h2 className="form-heading"> Create a Note</h2>

        <div className="notes-group">
          <label htmlFor="title" className="notes-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your note title..."
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
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note content..."
            className="notes-textarea"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Save Note
          </button>
          <button type="button" className="view-btn" onClick={fetchNotes}>
            View Notes
          </button>
          <button type="button" className="Logout-btn" onClick={logoutHandler}>
            Logout
          </button>
          {/* <button type="button" className="Share-btn" onClick={shareHandler}>
            Share
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default Notes;
