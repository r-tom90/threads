//app/page.tsx
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    // <ClerkProvider>
    <>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <h1 className="head-text text-left">Home</h1>
    </>
    // </ClerkProvider>
  );
}
