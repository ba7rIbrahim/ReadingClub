import Footer from "@/components/footer";
import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div class="min-h-screen py-10 lg:py-0 lg:grid place-content-center">
        <div class="text-center mb-14">
          <h1 class="capitalize text-main text-4xl font-semibold">
            contact us
          </h1>
          <p class="text-lg text-gray-700 mt-4 px-2">
            Have any questions? We had love to hear from you.
          </p>
        </div>
        <div class="lg:flex items-center justify-center lg:gap-10">
          <div class="bg-white rounded-lg py-12 px-10 shadow-lg max-w-xs mx-auto lg:mx-0 flex-grow border-t-8 border-black">
            <div>
              <h2 class="font-semibold text-2xl text-gray-900">Press</h2>
              <p class="text-gray-400 mt-2.5 text-lg">
                Are you interested in our latest news or working on a Doe story
                and need to get in touch?
              </p>
              <button class="border border-black text-black pt-1 pb-1.5 w-full shadow-sm rounded-full inline mt-16 tracking-wider capitalize">
                visit press page
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg pt-16 pb-10 px-10 border-t-8 border-main my-5 lg:my-0 shadow-lg max-w-xs mx-auto lg:mx-0 flex-grow">
            <div>
              <h2 class="capitalize font-semibold text-2xl text-gray-900">
                help & Support
              </h2>
              <p class="text-gray-400 mt-2.5 text-lg">
                Our support team is spread across the globe to give you answers
                fast.
              </p>
              <button class="border border-main text-white bg-main pt-1 pb-1.5 w-full shadow-sm rounded-full inline tracking-wider capitalize mt-24">
                visit support page
              </button>
              <button class="text-main w-full inline mt-3.5 tracking-wider uppercase text-xs">
                submit a request
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg py-12 px-10 shadow-lg max-w-xs mx-auto lg:mx-0 flex-grow border-t-8 border-black">
            <div>
              <h2 class="font-semibold text-2xl text-gray-900">Sales</h2>
              <p class="text-gray-400 mt-2.5 text-lg">
                Get in touch with our sales team to see how we can work
                together.
              </p>
              <button class="border border-black text-black pt-1 pb-1.5 w-full shadow-sm rounded-full inline mt-24 tracking-wider capitalize">
                contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
