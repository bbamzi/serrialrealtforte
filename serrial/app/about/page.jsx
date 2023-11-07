function About() {
  return (
    <>
      <div className="flex flex-col items-left justify-start p-16  space-y-10 ">
        <h2 className="text-3xl font-sans font-bold text-green-900 ">
          We are a Leading Land and Landed property Solution Provider in Nigeria
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <p className="w-96 md:w-1/2 text-lg font-serif text-center">
          We have been in the real estate business since 2010, and we have a
          team of experienced and professional agents who are passionate about
          helping you achieve your real estate goals
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-5 items-center justify-center mt-10">
        <div className="h-96 w-96 bg-green-900 p-8 pt-16 rounded-xl ">
          <div className="">
            <h3 className="text-white text-2xl">Our Mission</h3>
            <hr class="w-full h-1  bg-white border-0 rounded " />
          </div>
          <div className="text-white mt-10 text-center">
            <p>
              Our mission is to provide the highest level of real estate
              services with a passion for building the local community and
              making our neighborhood a safe and prosperous place to live and
              work and invest
            </p>
          </div>
        </div>
        <div className="h-96 w-96  p-8 pt-16 ">
          <div className="">
            <h3 className="text-green-900 text-2xl">Our Vision</h3>
            <hr class="w-full h-1  bg-green-900 border-0 rounded " />
          </div>
          <div className="text-green-900 mt-10 text-center">
            <p>
              Our vision is to be the most trusted, respected, and innovative
              real estate team in the Nigeria.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
