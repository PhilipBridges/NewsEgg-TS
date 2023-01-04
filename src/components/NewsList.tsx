import { NewslistProps, NewsProps } from '../types'
import NewsRow from './NewsRow'

export default function NewsList({ articles, totalResults }: NewslistProps) {
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
                    Author
                  </th>
                </tr>
              </thead>
              {articles
                ? articles.map((data: NewsProps) => (
                    <NewsRow
                      key={data.url}
                      author={data.author}
                      content={data.content}
                      description={data.description}
                      publishedAt={data.publishedAt}
                      source={data.source}
                      title={data.title}
                      url={data.url}
                      urlToImage={data.urlToImage}
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
