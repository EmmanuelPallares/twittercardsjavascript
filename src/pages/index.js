import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        {/* // Twitter meta used in https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Your Website or User on twitter" />
        <meta
          name="twitter:title"
          content="Organization to delivery - Science and Technology website. Now Available on Twitter."
        />
        <meta
          name="twitter:description"
          content="On this page, you will find resources
          for quote o legal reply."
        />
        <meta
          name="twitter:image"
          content="https://media.graphassets.com/IZzrkuE5TSGQXEtwCtzn"
        />
      </Head>
      <section>
        <div> 
        <pre className="overflow-x-auto bg-black p-4 md:p-8 lg:p-12">
          <code className="text-sm text-slate-100 md:text-base lg:text-lg leading-relaxed md:leading-normal">
            {`       
          <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Your Website or User on twitter" />
          <meta
            name="twitter:title"
            content="Organization to delivery - Science and Technology website. Now Available on Twitter."
          />
          <meta
            name="twitter:description"
            content="On this page, you will find resources
            for quote o legal reply."
          />
          <meta
            name="twitter:image"
            content="https://media.graphassets.com/IZzrkuE5TSGQXEtwCtzn"
          />
        </Head>
        
        `}
          </code>
        </pre>
        </div>
      </section>
      <section className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">200</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Organization to delivery - Science and Technology website. Now
            Available on Twitter.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
          Organization to delivery - Science and Technology website. Now
            Available on Twitter.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/withsound"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Go other example
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
