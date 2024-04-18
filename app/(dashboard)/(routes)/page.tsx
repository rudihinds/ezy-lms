import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-end h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
``;
