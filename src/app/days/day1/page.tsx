import Image from "next/image";
import { Button, Label, TextInput } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Day 1</h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="puzzleInput" value="Puzzle input" />
          </div>
          <TextInput
            id="puzzleInput"
            type="puzzleInput"
            placeholder="numbers"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
