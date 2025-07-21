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
    setData: (data: any) => void;
    type: string;
    dropData?: any;
  }) => void;
};

export type UseDropProps = {
  acceptKeys?: string[];
  initData?: any;
  ref: React.RefObject<HTMLElement>;
  onDrop?: (params: {
    dragState: any;
    setData: (data: any) => void;
    data: any;
    type: string;
  }) => void;
  key: string;
};

export type useDragDataProps = {
  key: string;
};

export type useDropDataProps = {
  key: string;
};

export function useDrag(props: UseDragProps): void;
export function useDrop(props: UseDropProps): void;
export function useDragData(
  props: useDragDataProps
): [any, (data: any) => void, () => void];
export function useDropData(
  props: useDropDataProps
): [any, (data: any) => void, () => void];
export function Provider(props: ProviderProps): JSX.Element;
