import { useSession, signIn, signOut } from "next-auth/react";
import {
  AuthWrapper,
  SignInButton,
  SignOutButton,
  UserName,
} from "./AuthButton.styled";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <AuthWrapper>
        <UserName>{session.user.name}</UserName>
        <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton>
      </AuthWrapper>
    );
  }

  return <SignInButton onClick={() => signIn("github")}>Sign In</SignInButton>;
}
