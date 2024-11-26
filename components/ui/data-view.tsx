import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

export default function DataViewHome({ value, listTemplate, className }) {
  return (
    <DataView value={value} listTemplate={listTemplate} className={className} />
  )
}