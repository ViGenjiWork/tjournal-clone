import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";

import data from "./../../data";

import { CommentItem } from "./CommentItem";
import clsx from "clsx";

export const SideComments = () => {
  const [visibleComments, setVisibleComments] = React.useState(false);

  const toggleVisibleComments = () => {
    setVisibleComments(!visibleComments);
  };

  return (
    <div className={clsx(styles.root, !visibleComments && styles.rotated)}>

      <h3 onClick={toggleVisibleComments}>
        Комментарии <ArrowRightIcon />
      </h3>

      {visibleComments && data.comments.popular.map((obj) => (
        <CommentItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};
