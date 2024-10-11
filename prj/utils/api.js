import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:7000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");

    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: formattedDate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    toast.success("Booking confirmed!");
  } catch (error) {
    if (error.response) {
      // Handle specific server errors
      toast.error(`Error: ${error.response.data.message || "Booking failed"}`);
    } else if (error.request) {
      // Handle network errors
      toast.error("Network error. Please check your connection.");
    } else {
      // Handle other errors (code issues, etc.)
      toast.error("Something went wrong. Please try again.");
    }
    
    throw error;
  }
};

// utils/api.js

export const removeBooking = async (propertyId, email, token) => {
  try {
    const response = await api.post(
      `/user/removeBooking/${propertyId}`,
      { email }, // Send the user's email in the request body
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    console.error("Error cancelling booking:", error);
    throw error;
  }
};
export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};


export const getAllFav = async (email, token) => {
  if(!token) return 
  try{

    const res = await api.post(
      `/user/allFav`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      
    return res.data["favResidenciesID"]

  }catch(e)
  {
    toast.error("Something went wrong while fetching favs");
    throw e
  }
} 


export const getAllBookings = async (email, token) => {
  
  if(!token) return 
  try {
    const res = await api.post(
      `/user/allBookings`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];

    
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error
  }
}


export const createResidency = async (data, token) => {
  console.log(data)
  try{
    const res = await api.post(
      `/residency/create`,
      {
        data
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }catch(error)
  {
    throw error
  }
}