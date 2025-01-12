import { BgHightlightOnHoverText, UnderlineText } from "../components/UnderlineText"

export const UnderlinePage = () => {
  return (
    <div className="text-6xl flex flex-col">
      <UnderlineText text="Hello" border={3}/>
      <BgHightlightOnHoverText text="Devs.." />
    </div>
  )
}
