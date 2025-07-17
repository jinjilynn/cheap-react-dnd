# cheap-react-dnd

[![NPM](https://img.shields.io/badge/npm-v1.0.4-blue)](https://www.npmjs.com/package/cheap-react-dnd)

> A very simple and user-friendly drag-and-drop library that supports both mouse and touch events.

## Table of Contents

- [cheap-react-dnd](#cheap-react-dnd)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Quick Start](#quick-start)
  - [Usage](#usage)
    - [`Provider`](#provider)
    - [`useDrag`](#usedrag)
    - [`useDrop`](#usedrop)
    - [`useData`](#usedata)
    - [`operationType`](#operationtype)
  - [License](#license)

## Install

```bash
# Yarn
yarn add cheap-react-dnd

# NPM
npm install cheap-react-dnd
```

## Quick Start

```tsx
import Provider, {
  useDrop,
  useDrag,
  useData,
  operationType,
} from "cheap-react-dnd";
import React, { useRef } from "react";

const style = { width: 100, height: 100 };

const DragComponent = () => {
  const dropRef = useRef();
  useDrop({
    acceptKeys: ["*"],
    initData: { dropNo: 0 },
    ref: dropRef,
    onDrop: ({ dragState, setData, data, type }) => {
      // dragState is the state of the drag source
      // data is the data of the drop target
      // type is the operation type, e.g., ONSTART, ONENTER, ONHOVER, ONLEAVE, ONDROP, ONEND
      // setData is a function to update the data of the drop target
      console.log("Dropped", dragState, data, type);
    },
  });
  return (
    <div style={style} ref={dropRef}>
      {" "}
      Drop here{" "}
    </div>
  );
};
const key = "drag-1";
const DragComponent = () => {
  const dragRef = useRef();
  useDrag({
    key: "drag-1",
    ref: dragRef,
    initData: { dragNo: 9 },
    onDrag: ({ data, setData, type, dropData }) => {
      // data is the data of the drag source
      // dropData is the data of the drop target
      // type is the operation type, e.g., ONSTART, ONENTER, ONHOVER, ONLEAVE, ONDROP, ONEND
      // setData is a function to update the data of the drag source
      console.log("Dragging", data, dropData, type);
    },
  });
  return (
    <div style={style} ref={dragRef}>
      A drag
    </div>
  );
};

const AudienceComponent = () => {
  const data = useData(key);
  return <div>🥺</div>;
};
const App = () => (
  <Provider>
    <DragComponent />
    <DragComponent />
    <AudienceComponent />
  </Provider>
);
```

## Usage

NOTE: React hooks require `react` and `react-dom` version `16.8.0` or higher.

### `Provider`

A top-level component that all components utilizing useDrop, useDrag, and useData should be nested under the Provider.

|   Props   |        Type        |                                                                                                                                     Description                                                                                                                                     |
| :-------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| uniqueKey |       String       |                                                                                                             Use this prop when you are working with multiple Providers.                                                                                                             |
|   scale   | Function \| Object | When the outer element of the Provider uses the transform's scale property, it can lead to inaccurate drag positioning. To address this issue, you need to inform the Provider of the scaling ratios on both the horizontal and vertical axes. The default values are {x: 1, y: 1}. |

### `useDrag`

Use this within components that is a drag source.

Parameter object includes :`key, ref, initData, onDrag`

`key` : string required.</br>
`ref` : DOM reference.</br>
`initData` : initial data.</br>
`onDrag`: callback when dragging.

### `useDrop`

Parameter object includes :`acceptKeys = ["*"], initData, ref, onDrop`

`acceptKeys` string array required, determining what keys of the drag source can be accepted. if the drop target accepts all the keys of drag source, you specify it as `["*"]`</br>
`ref`: DOM reference.</br>
`initData` : initial data.</br>
`onDrop`: callback when dragging.</br>

Use this within components that is a drop target.

### `useData`

Use this in any component under the Provider to subscribe to the state of a specific drag source.

Parameter string: `key`</br>
the data of drag source inited by useDrag

### `operationType`

enum of state including:
ONSTART,
ONENTER,
ONHOVER,
ONLEAVE,
ONDROP,
ONEND

## License

MIT © Facebook Inc.
