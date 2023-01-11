import { NewslistProps, NewsProps } from '../types'
import NewsRow from './NewsRow'

export default function NewsList({ data }: NewslistProps) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Latest News</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 ">
          <div className="inline-block min-w-full shadow rounded-lg ">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Headline
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                </tr>
              </thead>
              {data
                ? data.map((data: NewsProps) => (
                    <NewsRow
                      uuid={data.uuid}
                      key={data.uuid}
                      snippet={data.snippet}
                      categories={data.categories}
                      description={data.description}
                      content={data.content}
                      published_at={data.published_at}
                      title={data.title}
                      url={data.url}
                      image_url={data.image_url}
                      source={data.source}
                    />
                  ))
                : null}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
