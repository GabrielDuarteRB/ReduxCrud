import { FaAppleAlt } from "react-icons/fa";

const Logo = ({radius, font}) => {
  return (
    <FaAppleAlt
        style={{
            borderRadius: radius,
            color: '#4e60d3',
            cursor: 'pointer',
            fontSize: font,
        }}
    />
  )
}
export default Logo