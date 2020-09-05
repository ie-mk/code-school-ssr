import React from 'react';
import { Icon } from '../icon';
//import './Desc.scss';
import Styled from './Desc.styles';

const EditMenu = () => {
  return (
    <Styled.ElementEditMenu>
      <Styled.EditHeader>Edit</Styled.EditHeader>
      <Styled.MenuContent>
        <Styled.MenuItem>
          Delete <i className="fa fa-close" />{' '}
        </Styled.MenuItem>
        <Styled.MenuItem>Update</Styled.MenuItem>
      </Styled.MenuContent>
    </Styled.ElementEditMenu>
  );
};

const Element = ({ el, idx, editMode }) => {
  if (typeof el === 'string') return el;

  const Tag = el.type;

  const children = []
    .concat(el.children)
    .map((child, i) => (
      <Element key={i} el={child} idx={i} editMode={editMode} />
    ));

  return (
    <Styled.ElementWrapper>
      {editMode ? <EditMenu /> : null}
      <Tag>
        <Icon icon={el.icon} />
        {children}
      </Tag>
    </Styled.ElementWrapper>
  );
};

function Desc({ step, canEditTask, setEditMode, editMode }) {
  const { desc } = step;
  const { children } = desc;

  return (
    <>
      {canEditTask ? (
        <Styled.EditButton
          editMode={editMode}
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          {editMode ? 'SAVE TASK' : 'Edit Task'}
        </Styled.EditButton>
      ) : null}
      <Styled.TaskManagerWrapper>
        {children.map((child, idx) => (
          <Element key={idx} el={child} idx={idx} editMode={editMode} />
        ))}
      </Styled.TaskManagerWrapper>
    </>
  );
}

export { Desc };
