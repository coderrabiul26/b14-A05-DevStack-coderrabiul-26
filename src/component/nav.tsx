import logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <div className="border-b-gray-200 border-b-2 outline-none sticky top-0 bg-white">
      <div className="flex justify-between items-center py-4 container mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex items-center gap-3 text-lg list-none">
            <li>
              <a className="text-pink-400 font-bold no-underline" href="">
                Home
              </a>
            </li>
            <li>
              <a className="no-underline text-black" href="">Technologies</a>
            </li>
            <li>
              <a className="no-underline text-black" href="">Projects</a>
            </li>
            <li>
              <a className="no-underline text-black" href="">About</a>
            </li>
            <li>
              <a className="no-underline text-black" href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="text-lg">Sign In</button>
          <button className="btn btn-secondary rounded-full text-lg">
            Sign UP
          </button>
        </div>
      </div>
    </div>
  );
}
