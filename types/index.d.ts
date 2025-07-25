// types/index.d.ts

import * as React from "react";

export type ProviderProps = {
  uniqueKey?: string;
  scale?: { x: number; y: number } | (() => { x: number; y: number });
  children: React.ReactNode;
};

export type UseDragProps = {
  key: string;
  ref: React.RefObject<HTMLElement>;
  initData?: any;
  onDrag?: (params: {
    data: any;
    polygon?: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
    ];
    setData: (data: any) => void;
    type: string;
    dropData: any;
    dropPolygon?: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
    ];
  }) => void;
};

export type UseDropProps = {
  acceptKeys?: string[];
  initData?: any;
  ref: React.RefObject<HTMLElement>;
  onDrop?: (params: {
    data: any;
    polygon?: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
    ];
    setData: (data: any) => void;
    type: string;
    dragData: any;
    dragPolygon?: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
    ];
  }) => void;
  key: string;
};

export type useDragStateProps = {
  key: string;
};

export type useDropStateaProps = {
  key: string;
};

export function useDrag(props: UseDragProps): void;
export function useDrop(props: UseDropProps): void;
export function useDragState(props: useDragStateProps): {
  data: any;
  setData: (data: any) => void;
  polygon: [
    [number, number],
    [number, number],
    [number, number],
    [number, number]
  ];
};
export function useDropState(props: useDropStateaProps): {
  data: any;
  setData: (data: any) => void;
  polygon: [
    [number, number],
    [number, number],
    [number, number],
    [number, number]
  ];
};
export function Provider(props: ProviderProps): React.JSX.Element;
