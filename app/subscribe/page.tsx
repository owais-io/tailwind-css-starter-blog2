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

// import siteMetadata from '@/data/siteMetadata'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

// export default function Page() {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center p-4 sm:p-8">
//         <h1 className="mb-4 text-xl font-bold sm:text-2xl">Subscribe to Our Newsletter</h1>
//         <p className="mb-6 text-center text-base sm:text-lg">
//           Stay updated with the latest posts, news, and exclusive content by subscribing to my
//           newsletter. Enter your email below and join the community!
//         </p>
//         {siteMetadata.newsletter?.provider && (
//           <div className="flex w-full items-center justify-center sm:w-auto">
//             <NewsletterForm />
//           </div>
//         )}
//       </div>
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
        <p className="mt-6 text-center text-sm text-red-500">
          <strong>Important:</strong> Since we are using EmailOctopus without a domain email
          address, please check your spam or junk folder for the confirmation email. Be sure to mark
          it as "Not Spam" so that future newsletters land in your inbox.
        </p>
      </div>
    </>
  )
}
