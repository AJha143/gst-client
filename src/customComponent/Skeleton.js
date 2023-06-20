import React from "react";
import PropTypes from 'prop-types';
import { Skeleton } from "@mui/material";

function SkeletonComponent(props) {
  const { animation, variant, width, height, classes } = props;
  return (
    <Skeleton
      animation={animation}
      variant={variant}
      width={width}
      height={height}
      classes={classes}
      {...props}
    />
  );
}

export default SkeletonComponent;


SkeletonComponent.propTypes = {
    variant:PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number,
    classes:PropTypes.object
}