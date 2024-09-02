// import siteMetadata from '@/data/siteMetadata'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

// export default function Page() {

//   return (
//     <>

//             {siteMetadata.newsletter?.provider && (
//         <div className="flex items-center justify-center pt-4">
//           <NewsletterForm />
//         </div>
//       )}
//     </>
//   )
// }

import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 sm:p-8">
        <h1 className="mb-4 text-xl font-bold sm:text-2xl">Subscribe to Our Newsletter</h1>
        <p className="mb-6 text-center text-base sm:text-lg">
          Stay updated with the latest posts, news, and exclusive content by subscribing to my
          newsletter. Enter your email below and join the community!
        </p>
        {siteMetadata.newsletter?.provider && (
          <div className="flex w-full items-center justify-center sm:w-auto">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
