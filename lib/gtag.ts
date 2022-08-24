export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

export const pageview = (url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

type Event = {
  action: string
  category: string
  label: string
  value: string
}

export const event = ({ action, category, label, value }: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
