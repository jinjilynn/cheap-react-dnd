# easy-react-dnd

[![NPM](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/easy-react-dnd)

> A very simple and user-friendly drag-and-drop library that supports both mouse and touch events.

## Table of Contents

- [easy-react-dnd](#easy-react-dnd)
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
yarn add easy-react-dnd

# NPM
npm install easy-react-dnd
```

## Quick Start

```tsx
import Provider, {
  useDrop,
  useDrag,
  useData,
  operationType,
} from "easy-react-dnd";
import React, { useRef } from "react";

const style = { width: 100, height: 100 };

const DragComponent = () => {
  const dropRef = useRef();
  useDrop({
    acceptKeys = ["*"],
    initData: { dropNo: 0 },
    ref: dropRef,
    onDrop: ({ dragState, setData, data, type }) => {},
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
    onDrag: ({ data, setData, type, dropData }) => {},
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

`key` string required
`ref` DOM reference
`initData` initial data
`onDrag` callback when dragging

### `useDrop`

Parameter object includes :`acceptKeys = ["*"], initData, ref, onDrop`

`acceptKeys` string array required, determining what keys of the drag source can be accepted
`ref` DOM reference
`initData` initial data
`onDrop` callback when dragging

Use this within components that is a drop target.

### `useData`

Use this in any component under the Provider to subscribe to the state of a specific drag source.

Parameter string: `key`
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
