export const register = async (email, password) => {
    const user = { email, password };
  
    try {
      const res = await fetch(`${process.env.REACT_APP_USER_AUTH}/register`, {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(user), // Convert the user object to a JSON string
      });
  
      if (!res.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json(); // Parse the JSON response
      return data; // Return the parsed data
  
    } catch (error) {
      console.error('Error during registration:', error); // Handle and log the error
      throw error; // Optionally re-throw the error to handle it further up the call chain
    }
  };
  
