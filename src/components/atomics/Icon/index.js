import { IconStyle } from "./style";

export default function Icon({ src, onClick }) {
    return (
        <IconStyle src={src} onClick={onClick} />
    )
}