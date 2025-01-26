import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 20

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
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 text-justify">&nbsp;&nbsp;&nbsp;&nbsp;As a DevOps Engineer with a passion for automation, cloud-native tools, and secure infrastructure, I bring a unique perspective shaped by my transition from a finance and accounting background. Currently pursuing a world-class Level 6 Diploma in Artificial Intelligence Operations (AIOps), I am upskilling myself with cutting-edge expertise in DevOps, Cloud Security, and AI-driven cloud solutions. My hands-on experience spans Linux, Docker, Jenkins, Ansible, Terraform, AWS, Bash and Python, coupled with a proactive approach to learning Kubernetes and integrating security best practices.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Being new to this field, I come without a rigid mindset, making me adaptable and ready to evolve according to organizational needs. This flexibility, combined with my growing knowledge in Cybersecurity (a key component of my diploma), positions me as a future-ready DevSecOps Engineer who prioritizes secure and efficient infrastructure. My earlier experience in accounting and data roles has honed my attention to detail and organizational skills, further enriching my capabilities. I believe in continuous growth and am excited to contribute to your team’s success while building innovative, secure solutions.</p>
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
