import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem.component";
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ items, routeName, title }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
