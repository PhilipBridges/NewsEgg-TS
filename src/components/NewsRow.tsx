import { NewsProps } from '../types'

function NewsRow(data: NewsProps) {
  const parsedDate = new Date(data.publishedAt)
  const formattedDate = parsedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  if (!data.content) return null
  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-20 h-30 hidden sm:table-cell">
              <img
                className="rounded-full"
                src={data.urlToImage ? data.urlToImage : ''}
                alt=""
              />
            </div>
            <div className="ml-3">
              <a href={data.url}>
                <p className="text-gray-900 whitespace-no-wrap">
                  {data.description}
                </p>
              </a>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {data.source.name ? data.source.name : 'Unknown'}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {formattedDate}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {data.author ? data.author : 'N/A'}
          </p>
        </td>
      </tr>
    </tbody>
  )
}

export default NewsRow
