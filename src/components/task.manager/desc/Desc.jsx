import React, { useState } from 'react';
import { Icon } from '../icon';
//import './Desc.scss';
import Styled from './Desc.styles';
import FlexContainer from '../../foundation/FlexContainer';
import EditMenu from './EditMenu';

const Element = ({
  el,
  editMode,
  setRerender,
  topParent,
  elementAccessPath,
}) => {
  if (typeof el === 'string') return el;

  const Tag = el.type;

  const children = el.children;

  return (
    <Styled.ElementWrapper>
      {editMode ? (
        <EditMenu
          topParent={topParent}
          setRerender={setRerender}
          elementAccessPath={elementAccessPath}
        />
      ) : null}
      <Tag>
        <Icon icon={el.icon} />
        {el.text}
        {children
          ? children.map((child, i) => (
              <Element
                key={i}
                el={child}
                elIndex={i}
                editMode={editMode}
                topParent={topParent}
                elementAccessPath={[...elementAccessPath, i]}
                setRerender={setRerender}
              />
            ))
          : null}
      </Tag>
    </Styled.ElementWrapper>
  );
};

function Desc({ step, canEditTask, setEditMode, editMode }) {
  const { desc } = step;
  const { children } = desc;

  const [rerender, setRerender] = useState(true);

  return (
    <>
      {canEditTask ? (
        <FlexContainer justifyContent="flex-end">
          {editMode ? (
            <Styled.EditButton onClick={() => setEditMode(false)}>
              Cancel
            </Styled.EditButton>
          ) : null}
          <Styled.EditButton
            editMode={editMode}
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            {editMode ? 'Save Task' : 'Edit Task'}
          </Styled.EditButton>
        </FlexContainer>
      ) : null}
      <Styled.TaskManagerWrapper key={rerender}>
        {children.map((child, idx) => (
          <Element
            key={idx}
            el={child}
            elIndex={idx}
            editMode={editMode}
            setRerender={setRerender}
            elementAccessPath={[idx]}
            topParent={desc}
          />
        ))}
      </Styled.TaskManagerWrapper>
    </>
  );
}

export { Desc };
