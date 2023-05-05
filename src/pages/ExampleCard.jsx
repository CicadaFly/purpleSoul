import React, { useState } from 'react';
import classes from './Example.module.css'

const ExampleCard = () => {

const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
//////////////// 被選會出現的框架
const SelectableCard = ({ selected, onClick, children }) => {
  const isSelected = selected ? `${classes.selected}` : '';
  const className = `${classes.selectable} ${isSelected}`;
  return (
    <Card>
      <div className={className} onClick={onClick}>
        {children}
        <div className={classes.check}>
          <span className={classes.checkmark}>✔</span>
        </div>
      </div>
    </Card>
  );
};

const SelectableTitleCard = ({ title, description, selected, onClick }) => {
  return (
    <SelectableCard selected={selected} onClick={onClick}>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.description}>{description}</p>
      </div>
    </SelectableCard>
  );
};

const SelectableCardList = ({ contents, multiple, maxSelectable, onChange }) => {
  const [selected, setSelected] = useState(multiple ? [] : -1);

  const onItemSelected = (index) => {
    if (multiple) {
      const selectedIndexes = [...selected];
      const selectedIndex = selectedIndexes.indexOf(index);
      if (selectedIndex > -1) {
        selectedIndexes.splice(selectedIndex, 1);
        onChange(selectedIndexes);
      } else {
        if (!(selectedIndexes.length >= maxSelectable)) {
          selectedIndexes.push(index);
          onChange(selectedIndexes);
        }
      }
      setSelected(selectedIndexes);
    } else {
      setSelected(index);
      onChange(index);
    }
  };

  const content = contents.map((cardContent, i) => {
    const { title, description } = cardContent;
    const isSelected = multiple ? selected.indexOf(i) > -1 : selected === i;
    return (
      <SelectableTitleCard
        key={i}
        title={title}
        description={description}
        selected={isSelected}
        onClick={() => onItemSelected(i)}
      />
    );
  });

  return <div className={classes.cardlist}>{content}</div>;
};

const Example = ({ title, cardContents, multiple, maxSelectable }) => {
  const [selected, setSelected] = useState([]);

  const onListChanged = (card) => {
    setSelected(card);
  };

  const submit = () => {
    window.alert(`Selected: ${selected}`);
  };

  return (
    <div className={classes.column}>
      <h1 className={classes.title}>{title}</h1>
      <SelectableCardList
        multiple={multiple}
        maxSelectable={maxSelectable}
        contents={cardContents}
        onChange={onListChanged}
      />
      <button className={classes.card} onClick={submit}>
        Get selected
      </button>
    </div>
  );
};


  const teams = [
    { title: 'FC Barcelona', description: 'Spain' },
    { title: 'Real Madrid', description: 'Spain' },
    { title: 'Bayern Munich', description: 'Germany' },
    { title: 'Juventus', description: 'Italy' },
  ];

  const genres = [
    { title: 'Google', description: 'Mountain View, CA' },
    { title: 'Apple', description: 'Cupertino, CA' },
    { title: 'Microsoft', description: 'Redmond, WA' },
    { title: 'Facebook', description: 'Menlo Park, CA' },
  ];

  return (
    <div>
      <Example title="Pick a team" cardContents={teams} />
      <Example
        title="Choose brands (3 max)"
        cardContents={genres}
        multiple
        maxSelectable={3}
      />
    </div>
  );

}
  export default ExampleCard
