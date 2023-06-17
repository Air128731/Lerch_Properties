const posts = [
    {
      id: 1,
      title: 'Madison County Sheriff’s Office',
      description1:
        '405 Randle Street',
      description2:   
        'Edwardsville',
      description3:
        'IL 62025, (618) 692‐4433',
    },
    {
      id: 2,
      title: 'Edwardsville Police Department',
      description1:
        '333 S. Main Street',
      description2:   
        'Edwardsville, IL 62025',
      description3:
        '(618) 656‐2131',
    },
    {
      id: 3,
      title: 'Edwardsville Fire Department & Ambulance Service',
      description1:
        '',
      description2:   
        '',
      description3:
        '(618) 692‐7540',
    },
    {
      id: 4,
      title: 'Glen Carbon Police Department',
      description1:
        '149 N. Main St.',
      description2:   
        'Glen Carbon, IL 62034',
      description3:
        '(618) 288‐7226',
    },
    {
      id: 5,
      title: 'Glen Carbon Fire Protection District',
      description1:
        '',
      description2:   
        '',
      description3:
        '(618) 288‐1220',
    },
    {
      id: 6,
      title: 'Collinsville Police Department',
      description1:
        '200 West Clay St.',
      description2:   
        'Collinsville IL 62234',
      description3:
        '(618) 344‐2131',
    },
    {
      id: 7,
      title: 'Collinsville Fire Department',
      description1:
        '',
      description2:   
        'Monday ‐ Friday',
      description3:
        '(618) 346‐5022 ext. 3141',
    },
    {
      id: 8,
      title: 'Maryville Police Department',
      description1:
        '2500 N. Center Street',
      description2:   
        'Maryville, IL 62062',
      description3:
        '(618) 344‐8899',
    },
    {
      id: 9,
      title: 'Maryville Fire Department',
      description1:
        '',
      description2:   
        '',
      description3:
        '(618) 344‐8099',
    },
    {
      id: 10,
      title: 'Edwardsville Public Works Department',
      description1:
        '200 E Park Street',
      description2:   
        'Edwardsville, IL 62025',
      description3:
        '(618) 692‐7535',
    },
    {
      id: 11,
      title: 'Glen Carbon Water & Sewer',
      description1:
        '151 N. Main St.',
      description2:   
        'Glen Carbon, IL 62034',
      description3:
        '(618) 288‐2661',
    },
    {
      id: 12,
      title: 'Collinsville Water Department',
      description1:
        '125 S Center St, Collinsville, IL 62234',
      description2:   
        '',
      description3:
        '(618) 346‐5200',
    },
    {
      id: 13,
      title: 'Maryville Water & Sewer Department',
      description1:
        '2520 N Center St, Maryville, IL 62062',
      description2:   
        '',
      description3:
        '(618) 345‐7029',
    },
    {
      id: 14,
      title: 'Collinsville Water Department',
      description1:
        '125 S Center St, Collinsville, IL 62234',
      description2:   
        '',
      description3:
        '(618) 346‐5200',
    },
    {
      id: 15,
      title: 'Maryville Water & Sewer Department',
      description1:
        '2520 N Center St, Maryville, IL 62062',
      description2:   
        '',
      description3:
        '(618) 345‐7029',
    },
    {
      id: 16,
      title: 'Allied Waste / Republic Services',
      description1:
        '',
      description2:   
        '',
      description3:
        'Phone: (618) 656‐6883',
    },
    {
      id: 17,
      title: 'Ameren IP – Gas & Electric',
      description1:
        '',
      description2:   
        '',
      description3:
        'Phone: (800) 755‐5000',
    },
    {
      id: 18,
      title: 'AT&T Telephone Services',
      description1:
        '',
      description2:   
        '',
      description3:
        'Phone: (800) 348‐8288',
    },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="py-20 bg-white sm:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 _sm:grid-cols-1">
            <div>
              <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-23.webp" className="rounded-xl" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
            </div>
            <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
              <h2 className="pb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Area Information</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Important Contact Information for Lerch Properties Residents
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Owner and Leasing Consultants:  (618) 288-3108
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Monday – Friday 9 AM – 5 PM
              </p>
            </div>          
          </div>

          <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between max-w-xl">
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description1}</p>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description2}</p>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description3}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  