import Styled from './Desc.styles';
import React, { useState } from 'react';
import AddElement from './AddElement';

const EditMenu = ({ topParent, elementAccessPath, setRerender, root }) => {
  const [showAddElementDialog, setShowAddElementDialog] = useState(false);
  const [newElPosition, setNewElPosition] = useState(null);

  const handleElementDelete = () => {
    if (confirm('Are you sure you want to delete the element?')) {
      const levelsDown = elementAccessPath.length;

      let parent;
      let newChildren;

      let i = 0;
      while (i < levelsDown) {
        // we want to get parent one level up where the element is
        if (i < levelsDown - 1) {
          parent = topParent.children[elementAccessPath[i]];
          if (parent.children) {
            newChildren = [...parent.children];
          }
        } else {
          // this is the level where we want to exec deletion operation
          if (newChildren) {
            newChildren.splice(elementAccessPath[i], 1);
            parent.children = newChildren;
          } else {
            // this means that this is first level and we delete on the top parent
            const newTopParentChildren = [...topParent.children];
            newTopParentChildren.splice(elementAccessPath[0], 1);

            topParent.children = newTopParentChildren;
          }
          // we want to force rerender of the component;
          setRerender(new Date().getTime());
        }
        i++;
      }
    }
  };

  return (
    <>
      {showAddElementDialog ? (
        <AddElement
          setShowAddElementDialog={setShowAddElementDialog}
          elementAccessPath={elementAccessPath}
          topParent={topParent}
          newElPosition={newElPosition}
          setRerender={setRerender}
        />
      ) : null}
      <Styled.ElementEditMenu>
        <Styled.EditHeader>
          <i className="fa fa-edit" />{' '}
        </Styled.EditHeader>
        <Styled.MenuContent>
          <Styled.MenuItem onClick={handleElementDelete}>
            Delete <i className="fa fa-close" />{' '}
          </Styled.MenuItem>
          <Styled.MenuItem
            onClick={() => {
              setShowAddElementDialog(true);
              setNewElPosition('asChild');
            }}
          >
            Add child
          </Styled.MenuItem>
          <Styled.MenuItem
            onClick={() => {
              setShowAddElementDialog(true);
              setNewElPosition('after');
            }}
          >
            Add After
          </Styled.MenuItem>
        </Styled.MenuContent>
      </Styled.ElementEditMenu>
    </>
  );
};

export default EditMenu;
