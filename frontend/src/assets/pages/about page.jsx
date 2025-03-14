import Footer from "../components/footer";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className=" w-[100%] h-[100vh]">
        <div
          className=" bg-cover bg-no-repeat bg-center  w-[100%] h-[100%]"
          style={{
            backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.59), rgba(12, 12, 12, 0.59)), url('/images/about.png')`,
          }}
        >
          <div className="h-[100%]  flex flex-col items-center justify-center">
            <div className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col gap-[30px]">
              <div className=" text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] text-center text-white ">
                About Us
              </div>

              <div className="leading-[17px] tracking-[1px] text-center text-white  h-[50%] text-[10px] sm:text-[12px] md:text-[12px] w-[100%]  lg:text-[14px]">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you. This is a great space to write a long text about your
                company and your services. You can use this space to go into a
                little more detail about your company. Talk about your team and
                what services you provide. Tell your visitors the story of how
                you came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out I'm
                a paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. Feel free to drag and drop
                me anywhere you like on your page. I’m a great place for you to
                tell a story and let your users know a little more about you.
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
