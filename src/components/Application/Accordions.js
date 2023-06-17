const posts = [
    {
      id: 1,
      title: 'How Much Will The Security Deposit Be?',
      href: '#',
      description:
        'Your security deposit will be the same as one months rent. Security deposits are due in full no later than the day before move in. *Note: Some applicants may be asked to pay a double security deposit at our discretion.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'When Will I Get My Security Deposit Back?',
      href: '#',
      description:
        'Your security deposit will be in the mail within 4-6 weeks of your move out date. It is important to provide a forwarding address to help expedite this process.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },
    {
      id: 3,
      title: 'If I Have Roommates, Who Does The Security Deposit Get Sent To?',
      href: '#',
      description:
        ' If you have a joint lease, security deposits will be divided evenly between each tenant unless a written request is made otherwise. If you want to change this, a request must be submitted by email, and all leaseholders must individually write that they agree to this.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },
    {
      id: 4,
      title: 'How and Where Do I Make Payments?',
      href: '#',
      description:
        'Rent payments can be made by cash, personal check, money order, or cashier’s check. You can drop off or mail in your payment to our rental office at 2921 N. Center St, Suite 6, Maryville IL 62062. ',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },

    {
      id: 5,
      title: 'When Will I Get My Security Deposit Back?',
      href: '#',
      description:
        'What Happens If I Cannot Pay Rent In Full By The Due Date?',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },

    {
      id: 6,
      title: 'When Will I Get My Security Deposit Back?',
      href: '#',
      description:
        'If you are unable to pay rent on the first of the month, contact our office immediately. We pride ourselves on being understanding to situations and offer a 5-day grace period. A late fee of $25 will be due at the beginning of the 6th business day. Payments made after the 19th of the month will be charged a $50 late fee. You will be served with a five-day legal notice when your rent is late. If rent isn’t paid and we don’t hear from you, we have no choice but to begin the eviction process.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },
    {
      id: 7,
      title: 'What If I Want My Locks Changed?',
      href: '#',
      description:
        'We are more than happy to schedule a lock change for you; however, the fee will be $50.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },
    {
      id: 8,
      title: 'What If I Am Locked Out Of My Apartment?',
      href: '#',
      description:
        'During normal office hours Monday-Friday, please call emergency maintenance and they will send someone over to let you in. You will need to provide identification. If this happens when our office is closed, you are responsible for calling a locksmith.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },
    {
      id: 9,
      title: 'Does My Lease Offer Insurance Coverage In The Event Of A Fire, Theft or Natural Disaster?',
      href: '#',
      description:
        'Your personal property and vehicles aren’t covered/insured under your lease agreement. It is our recommendation that you obtain renters insurance. This averages around $15 per month.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'Business', href: '#' },
    },

    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="py-20 bg-white sm:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 _sm:grid-cols-1">
            <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div>
              <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-22.webp" className="rounded-xl" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
            </div>
          </div>

          <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between max-w-xl">
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                </div>
                {/* <div className="relative flex items-center mt-8 gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="w-10 h-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  