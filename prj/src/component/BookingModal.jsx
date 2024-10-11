import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../context/UserDetailContext";
import { bookVisit, removeBooking } from "../../utils/api"; // Import both booking and removal APIs
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null); // To store the selected date
  const {
    userDetails: { token },
  } = useContext(UserDetailContext); // Retrieve token from context

  // Mutation for booking a visit
  const bookMutation = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token), // API call for booking
    onSuccess: () => {
      toast.success("Your visit is booked successfully!");
      setOpened(false); // Close modal on success
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong, please try again.");
    },
  });

  // Mutation for removing a booking
  const removeMutation = useMutation({
    mutationFn: () => removeBooking(propertyId, email, token), // API call for cancelling the booking
    onSuccess: () => {
      toast.success("Your booking has been cancelled.");
      setOpened(false); // Close modal on success
    },
    onError: (error) => {
      toast.error(
        error.message || "Something went wrong while cancelling the booking."
      );
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit or Cancel the booking"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        {/* Date picker for selecting visit date */}
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />

        {/* Book Visit Button */}
        <Button
          disabled={!value || bookMutation.isLoading}
          onClick={() => bookMutation.mutate()}
        >
          {bookMutation.isLoading ? "Booking..." : "Book Visit"}
        </Button>

        {/* Cancel Booking Button */}
        <Button
          color="red"
          disabled={removeMutation.isLoading}
          onClick={() => removeMutation.mutate()}
        >
          {removeMutation.isLoading ? "Cancelling..." : "Cancel Booking"}
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
