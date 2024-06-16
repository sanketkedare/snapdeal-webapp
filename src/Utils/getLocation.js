const getPINLocation = async (pincode) => {
  try {
    const apiUrl = "http://localhost:30001/api/location";

    const payload = {
      PIN: pincode,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }

    // Parse the response JSON
    const data = await response.json();

    // Return the location data
    return data.location;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};

export default getPINLocation;