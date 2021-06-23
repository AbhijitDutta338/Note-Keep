import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateNote(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [note, setnote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function writeNote(event){
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 4: 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={writeNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
