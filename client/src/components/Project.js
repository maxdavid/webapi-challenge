import React, { useState } from 'react';
import { useStateValue } from '../state';

import { List, Card } from 'antd';

const Project = props => {
  const [{ action }, dispatch] = useStateValue();
  const [completed, setCompleted] = useState(props.completed);
  const { name, description } = props;

  const toggleComplete = dispatch => {
    action.toggleProjectCompletion(dispatch, props.id);
    setCompleted(!completed);
  };

  return (
    <List.Item>
      <Card
        style={{
          opacity: completed ? 0.5 : 1,
          textDecoration: completed ? 'line-through' : ''
        }}
        title={name}
        extra={<a onClick={() => toggleComplete(dispatch)}>Toggle Complete</a>}
      >
        {description}
      </Card>
    </List.Item>
  );
};
export default Project;
