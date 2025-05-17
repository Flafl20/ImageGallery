export default function Card({ image }) {
  return (
    <div className="max-w-sm max-md:max-w-xl rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" alt="" />
      <div className="px-6 py-4">
        <p className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </p>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {image.tags
          .split(",")
          .splice(1, 5)
          .map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  )
}
