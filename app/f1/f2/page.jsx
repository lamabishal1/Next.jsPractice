import Link from 'next/link';
export default function f2() {
  return (
    <>
      <h1>f2 page</h1>
      <Link href={"/f4"}>F4</Link>
    </>
  );
}