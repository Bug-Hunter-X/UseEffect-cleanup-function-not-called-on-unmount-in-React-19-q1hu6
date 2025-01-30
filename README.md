# React 19 useEffect Cleanup Issue

This repository demonstrates a subtle issue related to the useEffect cleanup function in React 19 when using a custom hook.  The cleanup function, intended to run when the component unmounts, is not always called as expected. This is particularly notable when using a custom hook that wraps useState and useEffect.

## Problem Description

The provided `bug.js` file shows a simple counter component using a custom hook. The useEffect hook within the component includes a cleanup function.  However, under certain conditions (often when the parent component rapidly re-renders or unmounts), the cleanup function may fail to execute.

## Solution

The `bugSolution.js` provides a potential solution that demonstrates better usage of useEffect dependencies to prevent unintended unmount behavior and guarantees execution of the cleanup function. 