import { InputBase, ListItem, ListItemText, Checkbox } from "@material-ui/core";
import React from "react";

const Todo = ({ item }) => {
  return (
    <ListItem>
      <Checkbox checked={item.done} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked" }}
          type="text"
          id={item.id}
          name={item.name}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
