import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <ol className="list-inside list-decimal">
        <li>
          <Link href={"/dayjs"}>`dayjs`</Link>
        </li>
        <li>
          <Link href={"/useRef"}>`useRef`의 또 다른 사용법</Link>
        </li>
        <li>
          <Link href={"/immer"}>`immer.js`</Link>
        </li>
        <li>
          <Link href={"/axios"}>`axios`</Link>
        </li>
      </ol>
    </div>
  );
}

export default HomePage;
