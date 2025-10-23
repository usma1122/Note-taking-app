import React from "react";
import "./displaynotes.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserRequest } from "../../redux/Auth/actions";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";
function DisplayNotes() {
  const notes = useSelector((state) => state.notes);
  const { userData, error, loading } = notes;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createNoteHandler = function () {
    navigate("/");
  };
  const shareNoteHandler = function () {
    navigate(`/share-notes`);
  };
  const logoutHandler = function () {
    dispatch(logoutUserRequest());
  };
  if (loading) {
    return (
      <Spin tip="Loading...">
        <div style={{ minHeight: 100 }}>
          <p>Fetching your notes...</p>
        </div>
      </Spin>
    );
  }
  return (
    <section className="display-notes">
      <div className="display-notes-container">
        <div className="display-notes-header">
          <div className="display-notes-logo">
            <Link to="/" className="logo-link">
              <h1 className="logo">Note Book</h1>
            </Link>
          </div>
          <div className="display-notes-btn">
            <button className="share-note" onClick={shareNoteHandler}>
              Share Notes
            </button>
            <button className="create-note" onClick={createNoteHandler}>
              Create Note
            </button>
            <button className="logout-note" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
        {userData && userData.length > 0 ? (
          <div className="display-notes-map">
            {userData.map((note) => (
              <Card
                key={note.id}
                title={note.title}
                content={note.content}
                id={note.id}
              />
            ))}
          </div>
        ) : (
          <p className="note-not-avaible">
            No notes available. Please add some notes.
          </p>
        )}
        <div className="create-note-btn">
          <button className="create-note-mobile" onClick={createNoteHandler}>
            Create Note
          </button>
        </div>
      </div>
    </section>
  );
}

export default DisplayNotes;
