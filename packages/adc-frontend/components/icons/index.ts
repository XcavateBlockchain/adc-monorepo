import {
	AlignJustify,
	Calendar,
	ChevronDown,
	CircleX,
	Info,
	List,
	MessageSquare,
	MoreHorizontal,
	Plus,
	SendHorizonal,
	UserRoundIcon,
} from "lucide-react";
import { TemplateIcon, UserOutlineIcon } from "../layout/app-icons";

const Icons = {
	arrowDown: ChevronDown,
	user: UserRoundIcon,
	message: MessageSquare,
	circleX: CircleX,
	add: Plus,
	TemplateIcon,
	UserOutlineIcon,
	Info,
	Calendar,
	MoreHorizontal,
	SendHorizonal,
	List,
	AlignJustify,
};

export type IconType = keyof typeof Icons;

export default Icons;
