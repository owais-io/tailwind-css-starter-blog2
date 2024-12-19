import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-16 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-12 md:text-7xl">
            I&apos;m Owais, the DevOps Engineer.
          </h1>
          {/* New Section: Paragraph and Image */}
          <div className="mt-6 flex flex-col items-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            <div className="md:w-1/3">
              <Image
                src="/static/images/avatar.png" // Replace with your actual image path
                alt="Owais Abbasi"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
                nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
                tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
                iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia
                aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod
                in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

// import Link from '@/components/Link'
// import Tag from '@/components/Tag'
// import siteMetadata from '@/data/siteMetadata'
// import { formatDate } from 'pliny/utils/formatDate'
// // import NewsletterForm from 'pliny/ui/NewsletterForm'

// const MAX_DISPLAY = 5

// export default function Home({ posts }) {
//   return (
//     <>
//       <div className="divide-y divide-gray-200 dark:divide-gray-700">
//         <div className="space-y-2 pb-8 pt-6 md:space-y-5">
//           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
//             Latest
//           </h1>
//           <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
//             {siteMetadata.description}
//           </p>
//         </div>
//         <ul className="divide-y divide-gray-200 dark:divide-gray-700">
//           {!posts.length && 'No posts found.'}
//           {posts.slice(0, MAX_DISPLAY).map((post) => {
//             const { slug, date, title, summary, tags } = post
//             return (
//               <li key={slug} className="py-12">
//                 <article>
//                   <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
//                     <dl>
//                       <dt className="sr-only">Published on</dt>
//                       <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
//                         <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
//                       </dd>
//                     </dl>
//                     <div className="space-y-5 xl:col-span-3">
//                       <div className="space-y-6">
//                         <div>
//                           <h2 className="text-2xl font-bold leading-8 tracking-tight">
//                             <Link
//                               href={`/blog/${slug}`}
//                               className="text-gray-900 dark:text-gray-100"
//                             >
//                               {title}
//                             </Link>
//                           </h2>
//                           <div className="flex flex-wrap">
//                             {tags.map((tag) => (
//                               <Tag key={tag} text={tag} />
//                             ))}
//                           </div>
//                         </div>
//                         <div className="prose max-w-none text-gray-500 dark:text-gray-400">
//                           {summary}
//                         </div>
//                       </div>
//                       <div className="text-base font-medium leading-6">
//                         <Link
//                           href={`/blog/${slug}`}
//                           className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//                           aria-label={`Read more: "${title}"`}
//                         >
//                           Read more &rarr;
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//       {posts.length > MAX_DISPLAY && (
//         <div className="flex justify-end text-base font-medium leading-6">
//           <Link
//             href="/blog"
//             className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//             aria-label="All posts"
//           >
//             All Posts &rarr;
//           </Link>
//         </div>
//       )}
//       {/* {siteMetadata.newsletter?.provider && (
//         <div className="flex items-center justify-center pt-4">
//           <NewsletterForm />
//         </div>
//       )} */}
//     </>
//   )
// }
