const fetchLeaderboardData = async () => {
  try {
    let res = await fetch("http://localhost:3000/api/affiliates/2024-07-23T00:22:30+01:00", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "SoK4LxajrhPY8ASzFvrxKEymkAJrJdp5J6YNAiBkCLqS4rAJTB",
        "Cache-Control": "no-store",
        "cache": "no-store"
      }
    });

    console.log("Response Status:", res.status); 
    console.log("Response Headers:", [...res.headers.entries()]); 

    if (!res.ok) {
      throw new Error("Response not okay!");
    }

    let result = await res.json();

    console.log("Response Body:", result);

    if (Array.isArray(result) && result.length >= 1) {
      result.sort((b, a) => a.wagered - b.wagered);
      const newResult = result.map(obj => ({
        ...obj,
        wagered: obj.wagered.toLocaleString(),
        avatar: obj.avatar || '/default-avatar.png' 
      }));
      console.log("Sorted and Formatted Result:", newResult); 
      return { status: "success", users: [...newResult] };
    } else {
      return {
        status: "error",
        message: "There are no users in the result array"
      };
    }
  } catch (error) {
    console.error("Error:", error); 
    return {
      status: "error",
      message: "A major error occurred",
      error: error.message
    };
  }
};

export default fetchLeaderboardData;