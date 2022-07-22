import { ReactElement } from "react";
import {
    faGithub,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    discord: faDiscord,
};

export default function FooterIcon({
    icon,
}: {
    icon: keyof typeof icons;
}): ReactElement {
    if (!Object.keys(icons).includes(icon)) return <></>;

    return (
        <FontAwesomeIcon
            className="mr-1 h-6 w-6 fill-current sm:h-8 sm:w-8"
            icon={icons[icon]}
        />
    );
}
