import CameraIcon from "../Assets/icons/user_icon.svg";
import UserIcon from "../Assets/icons/Vector2.svg";
import TagIcon from "../Assets/icons/Vector3.svg";
import LikeIcon from "../Assets/icons/Vector4.svg";

export const cardsData = [
  {
    id: 1,
    title: "Total Revenues",
    increment: 2.5,
    value: 2129430,
    color: "#7FCD93",
    Icon: CameraIcon,
    money:true,
  },
  {
    id: 2,
    title: "Total Transactions",
    increment: 1.7,
    value: 1520,
    color: "#DEBF85",
    Icon: TagIcon,
    money:false,
  },
  {
    id: 3,
    title: "Total Products",
    increment: 1.4,
    value: 9721,
    color: "#ECA4A4",
    Icon: LikeIcon,
    money:false,
  },
  {
    id: 4,
    title: "Total Users",
    increment: 4.2,
    value: 9721,
    color: "#A9B0E5",
    Icon: UserIcon,
    money:false,
  },
];
