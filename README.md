# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incorrectly defined dependency array, leading to an infinite loop.

## Bug Description
The provided `MyComponent` uses the `useEffect` hook to update the `count` state.  However, because `count` is included in the dependency array, the effect runs continuously, causing an infinite loop and potentially crashing the application.

## Solution
The solution involves removing `count` from the dependency array.  The effect will only run once after the initial render if no dependencies are specified.