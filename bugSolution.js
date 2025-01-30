```javascript
function useMyState(initialState) {
  const [state, setState] = useState(initialState);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false; // Ensure cleanup only runs when really unmounted
    };
  }, []);

  return [state, (newValue) => {
    if (mountedRef.current) {
      setState(newValue);
    }
  }];
}

function MyComponent() {
  const [count, setCount] = useMyState(0);

  useEffect(() => {
    console.log('Component mounted');
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      console.log('Component unmounted');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```