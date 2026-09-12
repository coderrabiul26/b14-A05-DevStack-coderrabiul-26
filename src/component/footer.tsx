import footerLogo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <div>
      <div className="border-b-2 border-b-gray-300 my-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-9 container mx-auto justify-between">
          <div className="col-span-3 pr-2">
            <img className="mx-auto md:mx-0" src={footerLogo} alt="" />
            <p className="text-lg my-3 text-center md:text-left">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <button className="text-2xl font-bold"><a className="no-underline" href="">Github</a></button>
              <button className="text-2xl font-bold"><a className="no-underline" href="">Twitter</a></button>
              <button className="text-2xl font-bold"><a className="no-underline" href="">LinkedIn</a></button>
            </div>
          </div>
          <div className=" hidden md:block col-span-2 pl-4">
            <h1 className="text-xl font-bold mb-3">PRODUCT</h1>
            <ul className="list-none">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block col-span-2">
            <h1 className="text-xl font-bold mb-3">COMPANY</h1>
            <ul className="list-none">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block col-span-2">
            <h1 className="text-xl font-bold mb-3">LEGAL</h1>
            <ul className="list-none">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around md:justify-between items-center container mx-auto mb-20">
        <div>
          <p>@2026 Dev Stack. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <p>
            <a className="no-underline text-black" href="">Privacy</a>
          </p>
          <p>
            <a className="no-underline text-black" href="">Terms</a>
          </p>
        </div>
      </div>
    </div>
  );
}
