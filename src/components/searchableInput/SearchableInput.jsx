import React, { useState } from 'react';
import Styled from './SearchableInput.styles';
import { Field } from 'formik';

const SearchableInput = ({
  options = [],
  callback,
  name,
  width,
  label,
  placeholder,
}) => {
  const [showOptions, setShowOptions] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [activeOption, setActiveOption] = useState(0);

  const matchingOptions = options.filter(opt =>
    opt.toLowerCase().includes(searchString && searchString.toLowerCase()),
  );

  function handleKeyDown(event) {
    // key: arrow down
    if (event.keyCode === 40) {
      activeOption < matchingOptions.length - 1 &&
        setActiveOption(activeOption + 1);
    }
    // key: arrow up
    if (event.keyCode === 38) {
      activeOption > 0 && setActiveOption(activeOption - 1);
    }
    // key: enter
    if ((event.charCode || event.keyCode) === 13) {
      setSearchString(matchingOptions[activeOption]);
      setShowOptions(false);
      event.preventDefault();
      callback(matchingOptions[activeOption]);
    }
  }

  return (
    <Styled.Wrapper width={width} onKeyDown={handleKeyDown}>
      <Styled.Label>{label}</Styled.Label>
      <input
        className="search-input"
        name={name}
        onChange={e => {
          setShowOptions(true);
          setSearchString(e.target.value);
          setActiveOption(0);
        }}
        type="text"
        value={searchString}
        placeholder={placeholder}
      />
      {showOptions && searchString && matchingOptions ? (
        <Styled.OptionsContainer>
          {matchingOptions.map((opt, idx) => (
            <Styled.Option
              onClick={() => {
                setSearchString(opt);
                setShowOptions(false);
                callback(opt);
              }}
              key={idx}
              active={activeOption === idx}
            >
              {opt}
            </Styled.Option>
          ))}
        </Styled.OptionsContainer>
      ) : null}
    </Styled.Wrapper>
  );
};

export default SearchableInput;
