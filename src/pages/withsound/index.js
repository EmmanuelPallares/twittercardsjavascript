import Head from "next/head";
import { Howl, Howler } from "howler";

// Setup the new Howl.
const sound = new Howl({
  src: ["sound.webm"],
});

// Play the sound.
sound.play();

// Change global volume.
Howler.volume(0.5);

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="twitter:url"
          content="https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@spotify" />
        <meta name="twitter:title" content="Song Title" />
        <meta
          name="twitter:description"
          content="Rick Astley - Never Gonna Be You Up"
        />
        <meta
          name="twitter:image"
          content="https://open.spotifycdn.com/cdn/images/og-image.548bc4b7.png"
        />
        <meta
          name="twitter:player"
          content="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC"
        />
        <meta name="twitter:player:width" content="380" />
        <meta name="twitter:player:height" content="380" />
        <meta name="twitter:player:stream" content="true" />
        <meta name="twitter:player:stream:content_type" content="audio/mpeg" />
      </Head>
      {/* <section>
        <div>
          <pre className="overflow-x-auto bg-black p-4 md:p-8 lg:p-12">
            <code className="text-sm text-slate-100 md:text-base lg:text-lg leading-relaxed md:leading-normal">
              {`<Head>
  <meta name="twitter:url" content="https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:site" content="@spotify"/>
  <meta name="twitter:title" content="Song Title"/>
  <meta name="twitter:description" content="Rick Astley - Never Gonna Be You Up"/>
  <meta name="twitter:image" content="https://open.spotifycdn.com/cdn/images/og-image.548bc4b7.png"/>
  <meta name="twitter:player" content="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC"/>
  <meta name="twitter:player:width" content="380"/>
  <meta name="twitter:player:height" content="380"/>
  <meta name="twitter:player:stream" content="true"/>
  <meta name="twitter:player:stream:content_type" content="audio/mpeg"/>
</Head>`}
            </code>
          </pre>
        </div>
      </section>
      
      <section className="container mx-auto mt-12 p-6">
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 mb-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Back to Home
          </a>
        </div>
        <div className="bg-gray-200 w-96 h-16 flex items-center justify-center rounded-lg">
          <div className="mx-4">
            <p className="font-medium text-sm">Song Name</p>
            <p className="text-xs text-gray-500">Artist Name</p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <button className="mr-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500 hover:text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section> */}

      {/* SECTION SEPARATOR */}
      <section>
        <div> 
        <pre className="overflow-x-auto bg-black p-4 md:p-8 lg:p-12">
          <code className="text-sm text-slate-100 md:text-base lg:text-lg leading-relaxed md:leading-normal">
          {`<Head>
  <meta name="twitter:url" content="https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:site" content="@spotify"/>
  <meta name="twitter:title" content="Song Title"/>
  <meta name="twitter:description" content="Rick Astley - Never Gonna Be You Up"/>
  <meta name="twitter:image" content="https://open.spotifycdn.com/cdn/images/og-image.548bc4b7.png"/>
  <meta name="twitter:player" content="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC"/>
  <meta name="twitter:player:width" content="380"/>
  <meta name="twitter:player:height" content="380"/>
  <meta name="twitter:player:stream" content="true"/>
  <meta name="twitter:player:stream:content_type" content="audio/mpeg"/>
</Head>`}
          </code>
        </pre>
        </div>
      </section>
      <section className="container mx-auto mt-12 p-6">
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 mb-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Back to Home
          </a>
        </div>
        <div className="bg-gray-200 w-auto h-16 flex items-center justify-center rounded-lg">
          <div className="mx-4">
            <p className="font-medium text-sm">Song Name</p>
            <p className="text-xs text-gray-500">Artist Name</p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <button className="mr-4 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500 hover:text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
