import { NewsProps } from '../types'

function NewsRow(data: NewsProps) {
  const parsedDate = new Date(data.published_at)
  const formattedDate = parsedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
  })
  if (!data) return null
  return (
    <tbody>
      <tr>
        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm w-2/5">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-40 h-50 hidden sm:table-cell">
              <img
                className="rounded-full"
                src={data.image_url ? data.image_url : ''}
                alt=""
              />
            </div>
            <div className="ml-3">
              <a href={data.url}>
                <p className="text-gray-900 whitespace-no-wrap px-5 underline">
                  {data.description ? data.description : data.snippet}
                </p>
              </a>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {data.source ?? 'Unknown'}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {formattedDate}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {data.categories[0] ? data.categories[0] : 'General'}
          </p>
        </td>
      </tr>
    </tbody>
  )
}

export default NewsRow
