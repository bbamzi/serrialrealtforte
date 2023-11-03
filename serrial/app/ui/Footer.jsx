function Footer() {
  return (
    <footer className="mt-14">
      <div className="flex flex-col bg-green-900 text-white">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="md:border-r-[1px] border-green-200">
            <div className="mt-10 md:pl-5 p-2">
              <h2 className="font-bold">
                <span className="text-green-300 text-3xl uppercase">
                  serrial
                </span>
                <span className="text-3xl"> Realty Forte </span>
              </h2>
              <div className="mt-6">
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  neque temporibus ducimus nulla vel labore earum exercitationem
                  totam cumque molestiae! Quasi dignissimos quas non
                  praesentium, omnis eligendi ad id laudantium ut perspiciatis!
                  Cum aliquid modi iusto pariatur odit nemo excepturi suscipit,
                  consectetur ad deserunt assumenda esse aperiam obcaecati ea
                  exercitationem.
                </p> */}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-10 md:pl-20 p-2 md:grid md:grid-cols-2 text-white">
              <div className="mb-10 md:mb-0">
                <h3 className="text-2xl font-bold uppercase">QUICK LINKS</h3>
                <div className="md:flex-row mt-3">
                  <div>
                    <ul className="pl-4 text-white">
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Blog</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase">services</h3>
                <div className="md:flex-row mt-3">
                  <div>
                    <ul className="pl-4">
                      <li>Constructions</li>
                      <li>Land Survey</li>
                      <li>Land Sales</li>
                      <li>Land Documentations</li>
                      <li>Government Acquisition Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex md:flex-row flex-col justify-between p-2 border-t-[1px] border-green-200">
          <p>
            © 2023
            <a href="#">
              <span> Serrial Realty Forte Limited. All Rights Reserved. </span>
            </a>
          </p>
          <p className="md:mr-10">Designed by GalaxySailors Limted</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
