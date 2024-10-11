import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { checkFavourites, updateFavourites } from "../../utils/common";
import { toFav } from "../../utils/api";

const Heart = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white"); // Default heart color
  const { validateLogin } = useAuthCheck(); // Check if user is logged in
  const { user } = useAuth0(); // Get user details from Auth0

  const {
    userDetails: { favourites, token }, // Access token and favourites from context
    setUserDetails, // Setter to update user details
  } = useContext(UserDetailContext);

  // Effect to set heart color based on whether the residency is in favorites
  useEffect(() => {
    setHeartColor(() => checkFavourites(id, favourites)); // White if not a favorite, red if favorite
  }, [favourites, id]);

  // Mutation for adding/removing from favorites
  const { mutate, isLoading } = useMutation({
    mutationFn: () => toFav(id, user?.email, token), // Toggle favorite status via API
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favourites: updateFavourites(id, prev.favourites), // Update the favorites list locally
      }));
    },
    onError: (error) => {
      console.error("Error updating favorites:", error);
    },
  });

  // Handle like action
  const handleLike = () => {
    if (validateLogin()) {
      mutate(); // Call the mutation to toggle the favorite
      setHeartColor((prev) => (prev === "#fa3e5f" ? "white" : "#fa3e5f")); // Optimistic UI update
    }
  };

  return (
    <AiFillHeart
      size={24}
      color={heartColor} // Heart color based on favorite status
      onClick={(e) => {
        e.stopPropagation();
        if (!isLoading) handleLike(); // Only allow clicking when not loading
      }}
    />
  );
};

export default Heart;
