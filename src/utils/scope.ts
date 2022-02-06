import * as Vue from 'vue'
import React, {
  useEffect,
  useCallback,
  useContext,
  useDebugValue,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'

const DEFAULT_SCOPE: Record<string, unknown> = {
  Vue,
  React,
  ReactDOM,
  useEffect,
  useCallback,
  useContext,
  useDebugValue,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
}

export { DEFAULT_SCOPE }
