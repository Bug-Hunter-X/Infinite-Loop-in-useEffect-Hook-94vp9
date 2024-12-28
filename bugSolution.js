```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: The effect now only runs once after the initial render
    // setCount(count + 1); // This line is removed
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```