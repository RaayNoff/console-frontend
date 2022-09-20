import React, { FC, useState } from "react";
import s from "./window.module.scss";

interface IWindowProps {
  children?: React.ReactNode;
  windowTitle?: string;
}

interface IDraggingState {
  diffX: number;
  diffY: number;
  dragging: boolean;
  styles: {};
}

const WindowLayout: FC<IWindowProps> = ({
  children,
  windowTitle = "Title",
}) => {
  const [draggingState, setDraggingState] = useState({
    diffX: 0,
    diffY: 0,
    dragging: false,
  });

  const [windowPosition, setWindowPosition] = useState({
    left: 0,
    top: 0,
  });

  const onDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    setDraggingState({
      diffX: event.screenX - event.currentTarget.getBoundingClientRect().left,
      diffY: event.screenY - event.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  };

  const onDragging = (event: React.MouseEvent<HTMLDivElement>) => {
    if (draggingState.dragging) {
      setWindowPosition({
        left: event.screenX - draggingState.diffX,
        top: event.screenY - draggingState.diffY,
      });
    }
  };

  const onDragEnd = () => {
    setDraggingState({
      diffX: draggingState.diffX,
      diffY: draggingState.diffY,
      dragging: false,
    });
  };

  const onDragLeave = () => {
    setDraggingState({
      diffX: draggingState.diffX,
      diffY: draggingState.diffY,
      dragging: false,
    });
  };

  return (
    <article style={windowPosition} className={s.window}>
      <div
        className={`${s.window__panel} ${s.panel}`}
        onMouseDown={(event) => onDragStart(event)}
        onMouseMove={(event) => onDragging(event)}
        onMouseLeave={() => onDragLeave()}
        onMouseUp={() => onDragEnd()}
      >
        {windowTitle}
      </div>
      <hr className={s.panel__hr} />
      {children}
    </article>
  );
};

export default WindowLayout;
