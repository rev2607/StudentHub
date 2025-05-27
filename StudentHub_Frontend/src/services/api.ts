import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Example API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getExams = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching exams:", error);
    throw error;
  }
};

export const getCourses = async () => {
  try {
    const response = await api.get("/posts");
    return response.data.slice(0, 6); // Get first 6 posts as example courses
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export default api;
