import React from "react";

function Footer() {
  return (
    <>
      <footer class="text-stone-300 bg-primary">
        <div class="max-w-3xl mx-auto py-6">
          <hr class="h-px my-6 bg-primary" />
          <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a
                href="#"
                class="text-xl font-bold font-title text-stone-300 hover:text-stone-400"
              >
                STAKEMANIA&copy;
              </a>
            </div>

            <div class="flex mt-4 md:m-0">
              <div class="-m-x4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  class="px-4 text-sm text-stone-300 font-content hover:text-stone-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
