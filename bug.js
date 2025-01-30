```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Perform some side effect here, e.g., fetch data
    return () => {
      console.log('Component unmounted');
      // Cleanup function (optional)
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```