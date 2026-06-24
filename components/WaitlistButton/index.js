import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import {
  ButtonWrapper,
  StyledWaitlistButton,
  SuccessMessage,
  ErrorMessage,
} from "./WaitlistButton.styled";

export default function WaitlistButton({ tentId }) {
  const { data: session } = useSession();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [joinError, setJoinError] = useState(null);

  async function handleJoinWaitlist() {
    if (!session) {
      signIn("github");
      return;
    }

    setIsJoining(true);
    setJoinError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tentId }),
      });

      if (response.status === 409) {
        setJoinError("You have already joined this waitlist.");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      setHasJoined(true);
    } catch (error) {
      setJoinError("Something went wrong. Please try again.");
    } finally {
      setIsJoining(false);
    }
  }

  if (hasJoined) {
    return (
      <ButtonWrapper>
        <SuccessMessage>
          ✅ You're on the waitlist! We'll let you know if a spot opens up.
        </SuccessMessage>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper>
      <StyledWaitlistButton
        onClick={handleJoinWaitlist}
        disabled={isJoining}
        aria-label="Join the waitlist for this tent"
      >
        {isJoining ? "Joining..." : "🔔 Join Waitlist"}
      </StyledWaitlistButton>
      {joinError && <ErrorMessage>{joinError}</ErrorMessage>}
    </ButtonWrapper>
  );
}
