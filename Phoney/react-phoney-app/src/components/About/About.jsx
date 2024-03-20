const About = () => {
  return (
    <div className="bg-[#1B1A55] rounded-t-[4rem] ">
      <h2 className="text-white py-7 font-bold text-center text-3xl">
        About Us
      </h2>
      <p className="text-slate-200 w-2/4 text-center mx-auto max-sm:w-11/12">
        Learn more about our company and our commitment to providing
        high-quality products and exceptional customer service. Discover our
        mission, values, and the team behind Phoney.
      </p>
      <div className="flex max-sm:flex-col justify-around items-center w-10/12 mx-auto text-white py-9 ">
        <div>
          <img src="../../../public/images/about.png" alt="" />
        </div>
        <div className="lg:w-1/2 my-5 flex flex-col gap-2">
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What brands of smartphones do you offer?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                We offer a wide range of smartphones from leading brands such as
                Apple, Samsung, Google, OnePlus, Xiaomi, and many more. Our
                selection includes the latest models as well as popular devices
                from previous generations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you sell unlocked smartphones?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Yes, many of the smartphones we offer are unlocked, allowing you
                to use them with any carrier of your choice. However, we also
                offer carrier-specific models if you prefer.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I know if a smartphone is compatible with my carrier?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Each product listing includes information about network
                compatibility, including supported bands and carriers. You can
                also contact our customer support team for assistance in
                choosing the right device for your network.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you offer warranty and support for your products?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Yes, we stand behind the quality of our products and offer
                warranties on most smartphones and accessories. Additionally,
                our knowledgeable support team is available to assist you with
                any questions or issues you may encounter.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What payment options do you accept?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                We accept a variety of payment methods, including credit/debit
                cards, PayPal, Google Pay, Apple Pay, and more. You can choose
                the option that is most convenient for you during the checkout
                process.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I stay updated on the latest deals and promotions?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                To stay informed about our latest deals, promotions, and product
                releases, sign up for our newsletter or follow us on social
                media. You will receive exclusive offers and updates straight to
                your inbox or feed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
