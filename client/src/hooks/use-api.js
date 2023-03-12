import { useState, useEffect } from 'react';

// Define API root URL
const API_ROOT = 'https://localhost:9000';

// Custom hook to make API requests and return response, isLoading and error states
export function useApi({ path } = { path: '' }) {
  // Initialize state hooks with default values
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make API request and update state based on response
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.json()) // convert response to JSON
      .then(res => setResponse(res)) // set response state
      .catch(error => setError(error)) // set error state
      .finally(() => setIsLoading(false)); // set loading state to false
  }, []);

  // Return an object containing response, loading and error states
  return {
    response,
    isLoading,
    error
  };
}
