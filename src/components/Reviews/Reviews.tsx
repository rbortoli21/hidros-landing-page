import { Star } from "lucide-react"

export const Reviews = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      rating: 5,
      review: "This product exceeded my expectations! It's incredibly easy to use and has greatly improved my daily routine.",
    },
    {
      name: "Sam Lee",
      avatar: "/placeholder.svg",
      rating: 5,
      review: "I'm impressed with the quality and durability. It's clear that a lot of thought went into the design. Highly recommended!",
    },
    {
      name: "Taylor Swift",
      avatar: "/placeholder.svg",
      rating: 4,
      review: "Outstanding product! It's versatile, efficient, and has become an essential part of my life. I can't imagine going back to life without it.",
    },
  ]

  return (
    <section id="depoimentos" className="py-12 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Depoimento de nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={review.avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex" aria-label={`Rated ${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
