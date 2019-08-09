import React, { useEffect } from 'react';
import { useStateValue } from '../state';

import styled from 'styled-components';
import { List } from 'antd';

import Project from './Project';

const ProjectList = () => {
  const [{ projects, action }, dispatch] = useStateValue();

  useEffect(() => {
    action.getProjects(dispatch);
  }, []);

  return (
    <ListContainer>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={projects}
        renderItem={project => <Project key={project.id} {...project} />}
      />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: 10px;
`;

export default ProjectList;
