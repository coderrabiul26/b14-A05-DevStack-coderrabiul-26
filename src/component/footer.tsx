import footerLogo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <div>
      <div className="border-b-2 border-b-gray-300 my-20 py-12">
        <div className="grid grid-cols-9 container mx-auto justify-between">
          <div className="col-span-3 pr-2">
            <img src={footerLogo} alt="" />
            <p className="text-lg my-3">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-5">
              <button className="text-2xl font-bold">Github</button>
              <button className="text-2xl font-bold">Twitter</button>
              <button className="text-2xl font-bold">LinkedIn</button>
            </div>
          </div>
          <div className="col-span-2 pl-4">
            <h1 className="text-xl font-bold mb-3">PRODUCT</h1>
            <ul>
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
          <div className="col-span-2">
            <h1 className="text-xl font-bold mb-3">COMPANY</h1>
            <ul>
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
          <div className="col-span-2">
            <h1 className="text-xl font-bold mb-3">LEGAL</h1>
            <ul>
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
      <div className="flex justify-between items-center container mx-auto mb-20">
        <div>
          <p>@2026 Dev Stack. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <p>
            <a href="">Privacy</a>
          </p>
          <p>
            <a href="">Terms</a>
          </p>
        </div>
      </div>
    </div>
  );
}
