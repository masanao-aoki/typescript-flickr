//型定義
export interface FlickrApiSettings {
    $body: JQuery,
    method: string[],
    api_key: string,
    per_page: number,
    page: number,
    user_id: string
}
