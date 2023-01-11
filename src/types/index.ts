
export type NewsProps = {
    uuid: string
    title: string
    description: string
    snippet: string
    content: string
    url: string
    categories: [] | string
    source: string
    published_at: string
    image_url: string
}

export type NewslistProps = {
    data: NewsProps[]
}