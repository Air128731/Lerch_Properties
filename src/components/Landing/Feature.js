import { CheckIcon, ClockIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Excellent Customer Service',
    icon: CheckIcon,
  },
  {
    name: 'Safe, Quality Properties',
    icon: CheckIcon,
  },
  {
    name: 'Quick Response',
    icon: CheckIcon,
  },
  {
    name: 'Our Great Reputation',
    icon: CheckIcon,
  },
  {
    name: 'Leader in the industry',
    icon: CheckIcon,
  },
  {
    name: 'Affordable Rent Pricing',
    icon: CheckIcon,
  },
]

const features1 = [
    {
      name: 'Monday 9:00 AM~5:00 PM',
      icon: ClockIcon,
    },
    {
      name: 'Tuesday 9:00 AM~5:00 PM',
      icon: ClockIcon,
    },
    {
      name: 'Wednesday 9:00 AM~5:00 PM',
      icon: ClockIcon,
    },
    {
      name: 'Thursday 9:00 AM~5:00 PM',
      icon: ClockIcon,
    },
    {
      name: 'Friday 9:00 AM~5:00 PM',
      icon: ClockIcon,
    },
    {
      name: 'Saturday Closed',
      icon: ClockIcon,
    },
    {
        name: 'Sunday Closed',
        icon: ClockIcon,
    },
  ]

export default function Example() {
  return (
    <div className="py-10 overflow-hidden bg-white border border-gray-200 sm:py-10">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why choose us?</p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute w-5 h-5 text-indigo-600 left-1 top-1" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Business Hours</p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features1.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute w-5 h-5 text-indigo-600 left-1 top-1" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
