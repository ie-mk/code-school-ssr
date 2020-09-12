import React, { useState } from 'react';
import { Icon } from '../icon';
//import './Desc.scss';
import Styled from './Desc.styles';
import FlexContainer from '../../foundation/FlexContainer';
import EditMenu from './EditMenu';
import AddNewRootElement from './AddNewRootElement';

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
          root={true}
          topParent={topParent}
          setRerender={setRerender}
          elementAccessPath={elementAccessPath}
          elementValues={el}
        />
      ) : null}
      <Tag>
        {editMode ? <Styled.Tag>{`<${Tag}>`}</Styled.Tag> : null}
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
        {editMode ? <Styled.Tag>{`</${Tag}>`}</Styled.Tag> : null}
      </Tag>
    </Styled.ElementWrapper>
  );
};

function Desc({ step, canEditTask, setEditMode, editMode, saveTask }) {
  const { desc } = step;
  const { children } = desc;

  const [rerender, setRerender] = useState(true);

  return (
    <>
      {canEditTask ? (
        <FlexContainer justifyContent="space-between" padding="5px">
          <Styled.SaveButton
            type="secondary"
            size="md"
            padding="5px 10px"
            onClick={() => {
              saveTask();
            }}
          >
            Save Task
          </Styled.SaveButton>
          {editMode ? (
            <Styled.EditButton onClick={() => setEditMode(false)}>
              Cancel
            </Styled.EditButton>
          ) : null}
          {!editMode ? (
            <Styled.EditButton
              editMode={editMode}
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit Description
            </Styled.EditButton>
          ) : null}
          {/*{editMode ? (*/}
          {/*  <Styled.EditButton*/}
          {/*    editMode={editMode}*/}
          {/*    onClick={() => {*/}
          {/*      saveTask();*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Save Description*/}
          {/*  </Styled.EditButton>*/}
          {/*) : null}*/}
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
        {editMode ? (
          <AddNewRootElement
            setRerender={setRerender}
            elementAccessPath={[(children && children.length) || 0]}
            topParent={desc}
          />
        ) : null}
      </Styled.TaskManagerWrapper>
    </>
  );
}

export { Desc };
