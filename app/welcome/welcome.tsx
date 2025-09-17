import { ModeToggle } from "~/components/ui/mode-toggle";

export function Welcome() {
  return (
    <>
      <ModeToggle />
      <h1 className="text-2xl font-bold text-center ">Welcome</h1>
    </>
  );
}
