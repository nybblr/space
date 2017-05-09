import React, { Component } from 'react';

export default updater => BaseComponent => {
  class Draggable extends Component {
    constructor(...args) {
      super(...args);

      this.drag = {
        isDragging: false,
        key: null,
        dx: 0,
        dy: 0,
        ddx: 0,
        ddy: 0,
        startX: 0,
        startY: 0,
      };
    }

    dragStart = ({ clientX, clientY }) => {
      this.bindEvents();
      this.drag = {
        ...this.drag,
        isDragging: true,
        key: null,
        dx: 0,
        dy: 0,
        ddx: 0,
        ddy: 0,
        startX: clientX,
        startY: clientY,
      };
      updater(this.props, this.drag);
    }

    dragMove = ({ clientX, clientY }) => {
      let { startX, startY, dx, dy } = this.drag;

      let dxNew = clientX - startX;
      let dyNew = clientY - startY;

      this.drag = { ...this.drag,
        dx: dxNew,
        dy: dyNew,
        ddx: dxNew - dx,
        ddy: dyNew - dy,
      };

      updater(this.props, this.drag);
    }

    dragEnd = event => {
      this.unbindEvents();
      this.drag = { ...this.drag, isDragging: false };
      updater(this.props, this.drag);
    }

    bindEvents() {
      document.addEventListener('mousemove', this.dragMove);
      document.addEventListener('mouseup', this.dragEnd);
    }

    unbindEvents() {
      document.removeEventListener('mousemove', this.dragMove);
      document.removeEventListener('mouseup', this.dragEnd);
    }

    componentWillUnmount() {
      this.unbindEvents();
    }

    render() {
      return <BaseComponent {...this.props} dragStart={this.dragStart} />;
    }
  }

  return Draggable;
}
